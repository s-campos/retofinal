import { AfterContentInit, AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { pelicula } from 'src/app/interface/cartelera';
import Swiper from 'swiper';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, AfterViewInit {

  @Input() pelicula:pelicula[]=[];

 swiper! : Swiper
  constructor() {
  }

  ngAfterViewInit(): void {
     this.swiper = new Swiper('.swiper', {
      // Optional parameters
      loop: true
    });
  }

  ngOnInit(): void {
   }

   onSlideNext(){
    this.swiper.slideNext()
   }


   onSlidePrev(){
    this.swiper.slidePrev()
   }




}
