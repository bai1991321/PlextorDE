import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {LanguageService} from '../../../services/language/language.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  constructor(
      private navController: NavController,
      private language: LanguageService
  ) { }

  ngOnInit() {
  }

  navigateToLogin() {
    this.navController.navigateBack('/auth');
  }

  navigateToResetPassword() {
    this.navController.navigateForward('/auth/reset-password');
  }

}
