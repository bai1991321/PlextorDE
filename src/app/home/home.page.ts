import {Component, OnInit} from '@angular/core';
import {UtilsService} from '../../services/utils/utils.service';
import {LanguageService} from '../../services/language/language.service';
import {NavController} from '@ionic/angular';
import {CountriesService} from '../../services/countries/countries.service';
import {Plugins} from '@capacitor/core';
import {DeviceInfo} from '../../interface/interface';
import {HttpClient} from '@angular/common/http';

const {Device} = Plugins;

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    constructor(
        private http: HttpClient,
        private navController: NavController,
        private country: CountriesService,
        private language: LanguageService,
        private utils: UtilsService
    ) {
    }

    ngOnInit(): void {
        this.utils.showLoading({
            type: 1,
            position: 'bottom',
            message: this.language.getWordByLanguage('networkConnectionChecking') + '...',
            overlay: false
        }).then(() => {
            setTimeout(async () => {
                this.utils.hideLoading();
                const info = await Device.getInfo();
                // const info: DeviceInfo = {
                //     memUsed: 3360336,
                //     diskFree: 3054026752,
                //     diskTotal: 4227530752,
                //     model: 'Google Pixel XL',
                //     osVersion: '9',
                //     appVersion: '1.0',
                //     appBuild: '1',
                //     platform: 'android',
                //     manufacturer: 'unknown',
                //     uuid: '57207319a8879c6c',
                //     batteryLevel: 1,
                //     isCharging: true,
                //     isVirtual: false
                // };
                localStorage.setItem('deviceInfo', JSON.stringify(info));
                await this.navController.navigateRoot('/language');
            }, 1500);
        });
    }

}
