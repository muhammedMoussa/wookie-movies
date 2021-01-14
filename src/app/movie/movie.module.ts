import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';

import { MovieShellComponent } from './movie-shell/movie-shell.component';
import { MovieRoutingModule } from './movie-routing.module';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '/:slug',
    component: MovieShellComponent
  }
];

@NgModule({
  declarations: [MovieShellComponent],
  imports: [
    CommonModule,
    SharedModule,
    MovieRoutingModule
  ]
})
export class MovieModule { }
