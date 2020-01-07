import {Component, OnDestroy, OnInit} from '@angular/core';
import {LanguageService} from '../../services/language/language.service';
import {Router} from '@angular/router';
import {Events, NavController} from '@ionic/angular';
import {UserInterfaceService} from '../../services/user-interface/user-interface.service';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.page.html',
    styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit, OnDestroy {

    pages: string[];
    page: string;
    pageScrolled: boolean;

    constructor(
        private router: Router,
        private events: Events,
        private navController: NavController,
        private language: LanguageService,
        private ui: UserInterfaceService,
    ) {
        this.events.subscribe('page-scrolled', () => {
            this.pageScrolled = true;
        });

        this.events.subscribe('page-not-scrolled', () => {
            this.pageScrolled = false;
        });

        this.events.subscribe('navigate-forward-url', (data) => {
            this.navigatePage(data);
        });
    }

    ngOnInit() {
        this.pages = ['main', 'surveys', 'coaching', 'micro-learning', 'tools', 'profile',
            'prepare-survey', 'prepare-coaching', 'video-summary', 'mindful-select', 'breathing-select'];
        this.page = this.router.url.split('/tabs/')[1];
        this.pageScrolled = false;
    }

    ngOnDestroy(): void {
        this.events.unsubscribe('page-scrolled');
        this.events.unsubscribe('page-not-scrolled');
        this.events.unsubscribe('navigate-forward-url');
    }

    navigatePage(page: string) {
        this.ui.showHeaderTopBar();
        if (this.pages.indexOf(page) > this.pages.indexOf(this.page)) {
            this.navController.navigateForward('/tabs/' + page).then(() => {
            });
        } else {
            this.navController.navigateBack('/tabs/' + page).then(() => {
            });
        }
        this.page = page;
    }

    toggleSideMenu() {
        this.events.publish('toggle-side-menu');
    }

    navigateToBack(){
        this.navController.back();
        console.log('here')
    }
}
