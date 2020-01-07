import {Component} from '@angular/core';
import {LanguageService} from '../../../../services/language/language.service';
import {UserInterfaceService} from '../../../../services/user-interface/user-interface.service';
import {SurveyQuestionPage} from '../../../pages/survey-question/survey-question.page';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-prepare-survey',
  templateUrl: './prepare-survey.page.html',
  styleUrls: ['./prepare-survey.page.scss'],
})
export class PrepareSurveyPage {

  type: string;

  constructor(
      private navController: NavController,
      private language: LanguageService,
      private ui: UserInterfaceService
  ) { }

  ionViewWillEnter() {
    if (Number(localStorage.getItem('surveyType')) === 0) {
      this.type = 'WellBeing';
    } else {
      this.type = 'Stress';
    }
    this.ui.hideHeaderTopBar();
  }

  navigateToSurveyQuestions() {
    this.navController.navigateForward('/survey-question');
  }

}
