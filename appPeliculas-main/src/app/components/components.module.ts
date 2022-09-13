import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { PeliculasPosterComponent } from './peliculas-poster/peliculas-poster.component';
import { RatingModule } from 'ng-starrating';
import { PipesModule } from '../pipes/pipes.module';




@NgModule({
  declarations: [
    NavbarComponent,
    SliderComponent,
    PeliculasPosterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    RatingModule,
    PipesModule
  ],
  exports: [
    NavbarComponent,
    SliderComponent,
    PeliculasPosterComponent,
  ]
})
export class ComponentsModule { }
