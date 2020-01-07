import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MindfulExercisePage } from './mindful-exercise.page';

const routes: Routes = [
  {
    path: '',
    component: MindfulExercisePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MindfulExercisePage]
})
export class MindfulExercisePageModule {}
