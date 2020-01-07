import {Component, ViewChild} from '@angular/core';
import {LanguageService} from '../../../services/language/language.service';
import {IonSlides, NavController} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {UtilsService} from '../../../services/utils/utils.service';
import {AuthService} from '../../../services/auth/auth.service';

@Component({
    selector: 'app-survey-question',
    templateUrl: './survey-question.page.html',
    styleUrls: ['./survey-question.page.scss'],
})
export class SurveyQuestionPage {

    @ViewChild('slides', null) slides: IonSlides;
    questionDictionary = {
        french: [
            [
                'In the past two weeks, I have felt cheerful and in good spirits',
                'In the past two weeks, I have felt calm and relaxed',
                'In the past two weeks, I have felt active and vigorous',
                'In the past two weeks, I work up feeling fresh and rested',
                'In the past two weeks, my daily life has been filled with things that interest me',
            ],
            [
                'In the past two weeks, how often have you been bothered by feeling nervous, anxious or on edge',
                'In the past two weeks, how often have you been bothered by not being able to stop or control worrying',
                'In the past two weeks, how often have you been bothered by trouble relaxing',
                'In the past two weeks, how often have you been bothered by being so restless that it is hard to sit still',
                'In the past two weeks, how often have you been bothered by becoming easily annoyed or irritable',
            ]
        ],
        english: [
            [
                'In the past two weeks, I have felt cheerful and in good spirits',
                'In the past two weeks, I have felt calm and relaxed',
                'In the past two weeks, I have felt active and vigorous',
                'In the past two weeks, I work up feeling fresh and rested',
                'In the past two weeks, my daily life has been filled with things that interest me',
            ],
            [
                'In the past two weeks, how often have you been bothered by feeling nervous, anxious or on edge',
                'In the past two weeks, how often have you been bothered by not being able to stop or control worrying',
                'In the past two weeks, how often have you been bothered by trouble relaxing',
                'In the past two weeks, how often have you been bothered by being so restless that it is hard to sit still',
                'In the past two weeks, how often have you been bothered by becoming easily annoyed or irritable',
            ]
        ]
    };
    answerDictionary = {
        french: [
            'Tout le temps',
            'La plupart du temps',
            'Une partie du temps',
            'À aucun moment'
        ],
        english: [
            'All of the time',
            'Most of the time',
            'Some of the time',
            'At no time'
        ]
    };
    lastQuestion = {
        french: {
            // tslint:disable-next-line:max-line-length
            question: 'In the past month, have any of the following made it hard for you to work effectively (you can choose multiple options)',
            answers: [
                'Lacking support to do job',
                'Not sure what’s expected of me for task/role/project',
                'Frustrated with a colleague/ colleagues',
                'Current project not engaging / interesting',
                'Overloaded with work',
                'Family issue',
                'Lacking resources to do the job',
                'Uncertainty if my job is secure',
                'Not paid enough for the work I do',
                'Unfair/disrespectful treatment by management',
                'Bullying',
                'Not recognized enough for the work I do',
                'Lacking friendships/peer support at work',
                'Lacking opportunities to work on what I like',
                'N/A'
            ]
        },
        english: {
            // tslint:disable-next-line:max-line-length
            question: 'In the past month, have any of the following made it hard for you to work effectively (you can choose multiple options)',
            answers: [
                'Lacking support to do job',
                'Not sure what’s expected of me for task/role/project',
                'Frustrated with a colleague/ colleagues',
                'Current project not engaging / interesting',
                'Overloaded with work',
                'Family issue',
                'Lacking resources to do the job',
                'Uncertainty if my job is secure',
                'Not paid enough for the work I do',
                'Unfair/disrespectful treatment by management',
                'Bullying',
                'Not recognized enough for the work I do',
                'Lacking friendships/peer support at work',
                'Lacking opportunities to work on what I like',
                'N/A'
            ]
        }
    };
    bottomTitles = {
        french: 'Vos réponses resteront entièrement confidentielles',
        english: 'Your answers will remain entirely confidential'
    };
    buttonTitle = {
        french: 'Voir mon score',
        english: 'View my score'
    };

    type: number;
    title: string;
    questions: string[];
    answers: string[];
    hasScore: string[];
    scores: number[];
    lastAnswers: boolean[];
    currentIndex: number;

    constructor(
        private http: HttpClient,
        private navController: NavController,
        private language: LanguageService,
        private utils: UtilsService,
    ) {
    }

    ionViewWillEnter() {
        this.type = Number(localStorage.getItem('surveyType'));
        this.title = this.type === 0 ? 'wellnessCheck' : 'stressCheck';
        this.questions = this.questionDictionary[this.language.getCurrentLanguage()][this.type];
        this.answers = this.answerDictionary[this.language.getCurrentLanguage()];
        this.hasScore = ['', '', '', '', ''];
        this.scores = [0, 0, 0, 0, 0];
        this.lastAnswers = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
        this.currentIndex = 0;
    }

    setScore(index: number, score: number) {
        this.hasScore[index] = 'has-score';
        this.scores[index] = 4 - score;
    }

    async slideChanged() {
        this.currentIndex = await this.slides.getActiveIndex();
    }

    async slideMove(index) {
        this.currentIndex = index;
        await this.slides.slideTo(index);
    }

    nextQuestion() {
        this.slideMove(this.currentIndex + 1);
    }

    prevQuestion() {
        this.slideMove(this.currentIndex - 1);
    }

    answerLastQuestion(e, index) {
        this.lastAnswers[index] = e.detail.checked;
    }

    calcScore() {
        const score = this.scores.reduce((a, b) => a + b, 0);
        const percent = score * 5;
        localStorage.setItem('surveyPercent', percent + '');
        return {score, percent};
    }

    navigateToSurveyScore() {
        const score = this.calcScore();
        this.utils.showLoading().then(loading => {
            const deviceInfo = JSON.parse(localStorage.getItem('deviceInfo'));
            const params = {deviceInfo, survey_type: this.type, score};
            this.http.post(environment.surveyApi + 'set_score', {...params}).subscribe(() => {
                const body = {deviceInfo, answers: this.lastAnswers.toString()};
                this.http.post(environment.surveyApi + 'save_survey_answers', {...body}).subscribe(() => {
                    loading.dismiss().then(async () => {
                        await this.navController.navigateForward('/survey-score');
                    });
                });
            });
        });
    }

}
