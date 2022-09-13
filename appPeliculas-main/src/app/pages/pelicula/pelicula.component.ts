import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetallePelicula } from 'src/app/interface/detallePelicula';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Location } from '@angular/common';
import { Cast } from 'src/app/interface/actores';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.scss']
})
export class PeliculaComponent implements OnInit {

  cast:Cast []=[];
  pelicula!:DetallePelicula

  constructor(private activatedRoute: ActivatedRoute, private peliculasService:PeliculasService, public location:Location) { }

  ngOnInit(): void {
    const {id}= this.activatedRoute.snapshot.params;

    this.getDetallePeli(id)
    this.getCast(id);
  }

  getDetallePeli(id:string){
    this.peliculasService.detallePelicula(id).subscribe((resp:any)=>{
      this.pelicula = resp
    })
  }

  getCast(id:string){
    this.peliculasService.getActores(id).subscribe((cast:any)=>{
      this.cast = cast

    })
  }

  onRegresar(){
    this.location.back();
  }
}
