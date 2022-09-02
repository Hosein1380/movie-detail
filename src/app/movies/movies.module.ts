import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MoviesComponent } from './movies.component';
import { moviesRoutes } from './movies.routing';

@NgModule({
  declarations: [
    MoviesComponent
  ],
  imports: [
      CommonModule,
      RouterModule.forChild(moviesRoutes),
      ReactiveFormsModule
  ],
  providers: [],
})
export class MoviesModule { }
