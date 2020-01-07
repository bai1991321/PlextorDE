import { Component, OnInit } from '@angular/core';
import {LanguageService} from '../../../services/language/language.service';
import {Events, NavController} from '@ionic/angular';
import {UserInterfaceService} from '../../../services/user-interface/user-interface.service';

@Component({
  selector: 'app-survey-score',
  templateUrl: './survey-score.page.html',
  styleUrls: ['./survey-score.page.scss'],
})
export class SurveyScorePage implements OnInit {

  scoreTitle = {
    french: 'Que signifie mon score?',
    english: 'What does my score mean?'
  };

  descriptions = {
    french: [
      {
        less50: 'Your wellbeing score assesses how you feel right now in your life, this score is the result of an algorithm that takes into account your mood, your energy level and your level of commitment.<br><br>' +
            'It seems that your level of satisfaction on these aspects of your life is rather weak at the moment and that you have a feeling of well-being below average.<br>' +
            'We’re sharing it because we hope that it helps you to see that you don’t have to live with below average wellbeing.<br><br>' +
            'If this score corresponds to what you feel, please know that we’re sorry to hear that things are probably a bit tough for you right now and that using OminumPro program can help you improve your wellbeing score.<br><br>' +
            'In addition, we strongly recommend that you make an appointment with one of our coaches to take stock of your life and your emotions. A member of our team will also contact you to discuss.<br><br>' +
            'If you need urgent help, we recommend that you make a call to a recommended practitioner who can give you the psychological support you need.',
        between5060: 'Your wellbeing score assesses how you feel right now in your life, this score is the result of an algorithm that takes into account your mood, your energy level and your level of commitment.<br><br>' +
            'It seems that your level of satisfaction on these aspects of your life is rather average at the moment. Most people in this range say that they are doing OK but they also have hard moments as well.<br><br>' +
            'If you find that this score corresponds to what you feel, please know that using our program for a few weeks can help you improve your wellbeing. Do not hesitate to make an appointment with our coaches to discuss.',
        between6080: 'Your wellbeing score assesses how you feel right now in your life, this score is the result of an algorithm that takes into account your mood, your energy level and your level of commitment.<br><br>' +
            'It seems that your level of satisfaction on these aspects of your life is above the average range. Most people in this range positively evaluate their lives and indicate that they feel good.<br>' +
            'If this is not your case, do not worry, you are in the right place to access tools and tips that will help you connect with your own version of wellbeing. An appointment with one of our coaches can enlighten you on the different ways you have.',
        more80: 'Your wellbeing score assesses how you feel right now in your life, this score is the result of an algorithm that takes into account your mood, your energy level and your level of commitment.<br><br>' +
            'Congratulations! You are among the 20% of the population with the highest wellbeing scores. Most people in this range rate their lives very positively.<br><br>' +
            'Your score is relative to others so your personal experience might be different.<br>' +
            'Using OminumPro program can help you improve your life experience.'
      },
      {
        less30: 'You seem rather tense and stressed. You may feel that you are undergoing a\n' +
            ' lot at the moment and not able to find solutions.<br><br>' +
            'You may also feel helpless about your current life. If your stress levels remain high over time, you may be experiencing symptoms of mild anxiety and health problems, the most common being heart diseases …<br>' +
            'It would likely be beneficial for you to consult one of our trained professionals in order to learn how to manage your stress levels.<br><br>' +
            'A path to explore: work on your breathing, your thinking patterns and a shift in the way you react.<br>' +
            'Feel free to repeat this test in the next days to reassess your stress level.',
        between3070: 'You seem relatively stressed right now. You probably know how to deal with stress in general, but there may be a number of situations you can not manage.<br><br>' +
            'Your results suggest that you may be experiencing some symptoms of mild anxiety and some feelings of helplessness that could generate emotional disturbances. While your symptoms are likely not having a major impact on your life, it is important to monitor them. To do so, you could consult one of our trained professionals or learn some methods of stress management.<br><br>' +
            'A path to explore: work on your breathing and your thinking patterns.<br>' +
            'Do not hesitate to take this test again in 15 days to reassess your stress level.',
        more70: 'You results suggest minimal or no symptoms of anxiety!<br><br>' +
            'It seems that you can manage your stress, adapt and find solutions. However, be careful not to underestimate the importance of managing your emotions in the long run. Our Micro Learnings and tools can be powerful allies to accompany you.<br><br>' +
            'Do not hesitate to take this test again in a month to re-evaluate your stress level.'
      }
    ],
    english: [
      {
        less50: 'Your wellbeing score assesses how you feel right now in your life, this score is the result of an algorithm that takes into account your mood, your energy level and your level of commitment.<br><br>' +
            'It seems that your level of satisfaction on these aspects of your life is rather weak at the moment and that you have a feeling of well-being below average.<br>' +
            'We’re sharing it because we hope that it helps you to see that you don’t have to live with below average wellbeing.<br><br>' +
            'If this score corresponds to what you feel, please know that we’re sorry to hear that things are probably a bit tough for you right now and that using OminumPro program can help you improve your wellbeing score.<br><br>' +
            'In addition, we strongly recommend that you make an appointment with one of our coaches to take stock of your life and your emotions. A member of our team will also contact you to discuss.<br><br>' +
            'If you need urgent help, we recommend that you make a call to a recommended practitioner who can give you the psychological support you need.',
        between5060: 'Your wellbeing score assesses how you feel right now in your life, this score is the result of an algorithm that takes into account your mood, your energy level and your level of commitment.<br><br>' +
            'It seems that your level of satisfaction on these aspects of your life is rather average at the moment. Most people in this range say that they are doing OK but they also have hard moments as well.<br><br>' +
            'If you find that this score corresponds to what you feel, please know that using our program for a few weeks can help you improve your wellbeing. Do not hesitate to make an appointment with our coaches to discuss.',
        between6080: 'Your wellbeing score assesses how you feel right now in your life, this score is the result of an algorithm that takes into account your mood, your energy level and your level of commitment.<br><br>' +
            'It seems that your level of satisfaction on these aspects of your life is above the average range. Most people in this range positively evaluate their lives and indicate that they feel good.<br>' +
            'If this is not your case, do not worry, you are in the right place to access tools and tips that will help you connect with your own version of wellbeing. An appointment with one of our coaches can enlighten you on the different ways you have.',
        more80: 'Your wellbeing score assesses how you feel right now in your life, this score is the result of an algorithm that takes into account your mood, your energy level and your level of commitment.<br><br>' +
            'Congratulations! You are among the 20% of the population with the highest wellbeing scores. Most people in this range rate their lives very positively.<br><br>' +
            'Your score is relative to others so your personal experience might be different.<br>' +
            'Using OminumPro program can help you improve your life experience.'
      },
      {
        less30: 'You seem rather tense and stressed. You may feel that you are undergoing a\n' +
            ' lot at the moment and not able to find solutions.<br><br>' +
            'You may also feel helpless about your current life. If your stress levels remain high over time, you may be experiencing symptoms of mild anxiety and health problems, the most common being heart diseases …<br>' +
            'It would likely be beneficial for you to consult one of our trained professionals in order to learn how to manage your stress levels.<br><br>' +
            'A path to explore: work on your breathing, your thinking patterns and a shift in the way you react.<br>' +
            'Feel free to repeat this test in the next days to reassess your stress level.',
        between3070: 'You seem relatively stressed right now. You probably know how to deal with stress in general, but there may be a number of situations you can not manage.<br><br>' +
            'Your results suggest that you may be experiencing some symptoms of mild anxiety and some feelings of helplessness that could generate emotional disturbances. While your symptoms are likely not having a major impact on your life, it is important to monitor them. To do so, you could consult one of our trained professionals or learn some methods of stress management.<br><br>' +
            'A path to explore: work on your breathing and your thinking patterns.<br>' +
            'Do not hesitate to take this test again in 15 days to reassess your stress level.',
        more70: 'You results suggest minimal or no symptoms of anxiety!<br><br>' +
            'It seems that you can manage your stress, adapt and find solutions. However, be careful not to underestimate the importance of managing your emotions in the long run. Our Micro Learnings and tools can be powerful allies to accompany you.<br><br>' +
            'Do not hesitate to take this test again in a month to re-evaluate your stress level.'
      }
    ]
  };

  title = 'wellbeingScore';
  percent: number;
  description: string;

  constructor(
      private events: Events,
      private navController: NavController,
      private language: LanguageService,
      private ui: UserInterfaceService
  ) { }

  ngOnInit() {
    const type = Number(localStorage.getItem('surveyType'));
    this.percent = Number(localStorage.getItem('surveyPercent'));
    if (type === 0) {
      if (this.percent <= 50) {
        this.description = this.descriptions[this.language.getCurrentLanguage()][type].less50;
      } else if (this.percent > 50 && this.percent < 60) {
        this.description = this.descriptions[this.language.getCurrentLanguage()][type].between5060;
      } else if (this.percent >= 60 && this.percent < 80) {
        this.description = this.descriptions[this.language.getCurrentLanguage()][type].between6080;
      } else if (this.percent >= 80) {
        this.description = this.descriptions[this.language.getCurrentLanguage()][type].more80;
      }
    } else {
      this.title='stressScore';
      if (this.percent <= 30) {
        this.description = this.descriptions[this.language.getCurrentLanguage()][type].less30;
      } else if (this.percent > 30 && this.percent < 70) {
        this.description = this.descriptions[this.language.getCurrentLanguage()][type].between3070;
      } else if (this.percent >= 70) {
        this.description = this.descriptions[this.language.getCurrentLanguage()][type].more70;
      }
    }
  }

  navigateToSurveys() {
    this.ui.showHeaderTopBar();
    this.events.publish('navigate-forward-url', 'surveys');
  }

}
