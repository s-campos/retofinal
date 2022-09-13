import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pelicula } from 'src/app/interface/cartelera';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {
  texto:string ='';
  pelicula:pelicula[]=[];

  constructor(private activateRoute:ActivatedRoute,private peliculasServices:PeliculasService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((resp:any)=>{
      this.texto = resp.texto
        this.peliculasServices.buscarPeliculas(resp.texto).subscribe( peli => {

          this.pelicula = peli
        })
    })
  }

}
