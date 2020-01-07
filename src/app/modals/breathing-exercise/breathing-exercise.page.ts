import { Component } from '@angular/core';
import {LanguageService} from '../../../services/language/language.service';
import {Events, ModalController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-breathing-exercise',
  templateUrl: './breathing-exercise.page.html',
  styleUrls: ['./breathing-exercise.page.scss'],
})
export class BreathingExercisePage {

  breathingType: string;

  isCountdown: boolean;
  countdownTimer: any;
  countdownTime: number;

  isStarted: boolean;

  timer: any;
  breathingCounts: number;
  totalSeconds: number;

  breather: any;

  state: number;
  stateClass: string;
  stateLabel: string;
  stateClasses: string[] = ['breathe-in', 'breathe-out', 'hold'];
  stateLabels: string[] = [
    this.language.getWordByLanguage('breatheIn'),
    this.language.getWordByLanguage('breatheOut'),
    this.language.getWordByLanguage('hold')
  ];

  countdownPlayer: HTMLAudioElement;
  breatheInPlayer: HTMLAudioElement;
  breatheOutPlayer: HTMLAudioElement;
  breatheEndedPlayer: HTMLAudioElement;

  constructor(
      private navParams: NavParams,
      private modalController: ModalController,
      private language: LanguageService
  ) { }

  ionViewWillEnter() {
    this.isCountdown = false;
    this.countdownTime = 4;
    this.countdownTimer = null;

    this.breathingType = this.navParams.get('breathingType');

    this.isStarted = false;

    this.timer = null;
    this.breathingCounts = 0;
    this.totalSeconds = 0;

    this.breather = null;

    this.state = -1;
    this.stateClass = '';
    this.stateLabel = this.stateLabels[0];

    this.countdownPlayer = document.getElementById('countdown-player') as HTMLAudioElement;
    this.breatheInPlayer = document.getElementById('breathe-in-player') as HTMLAudioElement;
    this.breatheOutPlayer = document.getElementById('breathe-out-player') as HTMLAudioElement;
    this.breatheEndedPlayer = document.getElementById('breathe-ended-player') as HTMLAudioElement;
  }

  prepareCountDown() {
    this.breathingCounts = 0;
    this.totalSeconds = 0;

    this.countdownTimer = setInterval(() => {
      if (!this.isCountdown) {
        this.isCountdown = true;
        this.countdownPlayer.play();
      }
      if (this.countdownTime === 1) {
        this.isCountdown = false;
        this.isStarted = true;
        this.startBreathing();
        clearInterval(this.countdownTimer);
      } else {
        this.countdownTime--;
      }
    }, 900);
  }

  startBreathing() {
    this.state = 0;
    this.stateLabel = this.stateLabels[this.state];
    this.stateClass = this.stateClasses[this.state];
    this.playBreathingSound();
    this.countTime();
    this.breathingByType();
  }

  stopBreathing() {
    clearTimeout(this.breather);
    this.breather = null;
    this.state = -1;
    this.stateClass = '';
    this.stateLabel = this.stateLabels[1];
    this.breathingCounts = 20;
    this.isStarted = false;
    this.breatheInPlayer.pause();
    this.breatheOutPlayer.pause();
    this.breatheEndedPlayer.play();
  }

  breathingByType() {
    switch (this.breathingType) {
      case 'balance':
        this.breather = setTimeout(() => {
          if (this.breathingCounts < 20) {
            this.state = 1 - this.state;
            this.stateLabel = this.stateLabels[this.state];
            this.stateClass = this.stateClasses[this.state];
            if (this.state === 1) {
              this.breathingCounts++;
            }
            this.playBreathingSound();
            this.breathingByType();
          } else {
            this.stopBreathing();
          }
        }, 4000);
        break;
      case 'relax':
        if (this.state === 0) {
          clearTimeout(this.breather);
          this.breather = setTimeout(() => {
            this.state = 2;
            this.stateLabel = this.stateLabels[this.state];
            this.stateClass = this.stateClasses[this.state];
            this.playBreathingSound();
            this.breathingByType();
          }, 4000);
        } else if (this.state === 1) {
          clearTimeout(this.breather);
          this.breather = setTimeout(() => {
            if (this.breathingCounts < 20) {
              this.state = 0;
              this.stateLabel = this.stateLabels[this.state];
              this.stateClass = this.stateClasses[this.state];
              this.playBreathingSound();
              this.breathingByType();
              this.breathingCounts++;
            } else {
              this.stopBreathing();
            }
          }, 8000);
        } else if (this.state === 2) {
          clearTimeout(this.breather);
          this.breather = setTimeout(() => {
            this.state = 1;
            this.stateLabel = this.stateLabels[this.state];
            this.stateClass = this.stateClasses[this.state];
            this.playBreathingSound();
            this.breathingByType();
          }, 7000);
        }
        break;
      case 'fall':
        if (this.state === 0) {
          clearTimeout(this.breather);
          this.breather = setTimeout(() => {
            this.state = 1;
            this.stateLabel = this.stateLabels[this.state];
            this.stateClass = this.stateClasses[this.state];
            this.playBreathingSound();
            this.breathingByType();
          }, 4000);
        } else if (this.state === 1) {
          clearTimeout(this.breather);
          this.breather = setTimeout(() => {
            if (this.breathingCounts < 20) {
              this.state = 0;
              this.stateLabel = this.stateLabels[this.state];
              this.stateClass = this.stateClasses[this.state];
              this.playBreathingSound();
              this.breathingByType();
              this.breathingCounts++;
            } else {
              this.stopBreathing();
            }
          }, 8000);
        }
        break;
    }
  }

  playBreathingSound() {
    switch (this.state) {
      case 0:
        this.breatheInPlayer.play();
        break;
      case 1:
        this.breatheOutPlayer.play();
        break;
    }
  }

  countTime() {
    this.timer = setInterval(() => {
      if (this.isStarted) {
        this.totalSeconds++;
      } else {
        clearInterval(this.timer);
      }
    }, 1000);
  }

  dismissModal() {
    this.modalController.dismiss();
  }

}
