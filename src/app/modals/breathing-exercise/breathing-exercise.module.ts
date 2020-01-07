import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BreathingExercisePage } from './breathing-exercise.page';

const routes: Routes = [
  {
    path: '',
    component: BreathingExercisePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BreathingExercisePage]
})
export class BreathingExercisePageModule {}
