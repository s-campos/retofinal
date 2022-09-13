import { Component, Input, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { pelicula } from 'src/app/interface/cartelera';
import { Router } from '@angular/router';
@Component({
  selector: 'app-peliculas-poster',
  templateUrl: './peliculas-poster.component.html',
  styleUrls: ['./peliculas-poster.component.scss']
})
export class PeliculasPosterComponent implements OnInit {

 @Input() pelicula:pelicula[]=[];

  constructor(private peliculasSerice:PeliculasService, private router:Router) { }

  ngOnInit(): void {}

  peliculaClick(Mipelicula:pelicula){
    this.router.navigate(['/pelicula', Mipelicula.id])

  }
  }


