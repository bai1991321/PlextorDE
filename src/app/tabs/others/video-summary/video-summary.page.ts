import {Component, ViewChild} from '@angular/core';
import {Video} from '../../../../interface/interface';
import {UserInterfaceService} from '../../../../services/user-interface/user-interface.service';
import {LanguageService} from '../../../../services/language/language.service';
import {Events} from '@ionic/angular';

@Component({
  selector: 'app-video-summary',
  templateUrl: './video-summary.page.html',
  styleUrls: ['./video-summary.page.scss'],
})
export class VideoSummaryPage {

  video: Video = {
    title_in_french: '',
    title_in_english: '',
    description_in_french: '',
    description_in_english: '',
    duration:'',
    thumbnail_link: '',
    file_link: ''
  };

  constructor(
      private events: Events,
      private ui: UserInterfaceService,
      private language: LanguageService
  ) { }

  ionViewWillEnter() {
    this.ui.pageContainerScrollToTop(document.getElementsByClassName('page-container')[0] as HTMLDivElement);
    this.video = JSON.parse(localStorage.getItem('selectedVideo'));
  }

  checkScroll(e) {
    if (this.ui.watchPageControllerScrolled(e.target)) {
      this.events.publish('page-not-scrolled');
    } else {
      this.events.publish('page-scrolled');
    }
  }

}
