import { Component, OnInit } from '@angular/core';
import { pelicula } from 'src/app/interface/cartelera';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pelicula:pelicula[]=[];

  constructor(private peliculas:PeliculasService) { }

  ngOnInit(): void {
    this.getPeliculas()
  }

  getPeliculas(){
    this.peliculas.getPelicula().subscribe((resp:any)=>{
      this.pelicula=resp.results

    })
  }
}
