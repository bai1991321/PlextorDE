import { Component, OnInit } from '@angular/core';
import {Mindfulness} from '../../../interface/interface';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {ModalController, NavParams} from '@ionic/angular';
import {LanguageService} from '../../../services/language/language.service';

@Component({
  selector: 'app-mindful-exercise',
  templateUrl: './mindful-exercise.page.html',
  styleUrls: ['./mindful-exercise.page.scss'],
})
export class MindfulExercisePage implements OnInit {

  api = environment.api;
  data: Mindfulness[] = [];
  image = '';
  sound = '';
  paused = false;
  current = -1;
  timer = null;

  constructor(
      private http: HttpClient,
      private navParams: NavParams,
      private modalController: ModalController,
      private language: LanguageService
  ) { }

  ngOnInit() {
    const category = this.navParams.get('category');
    this.http.get(environment.toolsApi + 'mindfulness_data?category=' + category).subscribe((response: any) => {
      this.data = response.data as Mindfulness[];
      this.play();
    });
  }

  play() {
    this.paused = false;
    this.current += 1;
    this.image = this.data[this.current].image_url;
    this.sound = this.data[this.current].sound_link;
    this.timer = setTimeout(() => {
      if (this.current < this.data.length) {
        this.current += 1;
        this.image = this.data[this.current].image_url;
        this.sound = this.data[this.current].sound_link;
      }
    }, 30000);
  }

  pause() {
    this.paused = true;
    clearTimeout(this.timer);
    this.timer = null;
  }

  dismissModal() {
    this.pause();
    this.modalController.dismiss().then(() => {});
  }

}
