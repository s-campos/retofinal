import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Actores, Cast } from '../interface/actores';
import { Cartelera, pelicula } from '../interface/cartelera';
import { DetallePelicula } from '../interface/detallePelicula';
@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http:HttpClient) { }

  private baseUrl: string = 'https://api.themoviedb.org/3';
  private carteleraPage = 1;
  public cargando: boolean = false;

  get params() {
    return {
      api_key: '063ca9743015f155d91dedad92694cbe',
      language: 'es-ES',
      page: this.carteleraPage.toString()
    }
  }


  getPelicula():Observable<Cartelera>{
    return this.http.get<Cartelera>('https://api.themoviedb.org/3/movie/now_playing?api_key=063ca9743015f155d91dedad92694cbe&language=en-US&page=1')
  }

  buscarPeliculas( texto: string ):Observable<pelicula[]> {

    const params = {...this.params, page: '1', query: texto };

    return this.http.get<Cartelera>(`${ this.baseUrl }/search/movie`, { params}).pipe(map( resp => resp.results ))

  }

  detallePelicula(id:string){
    return this.http.get<DetallePelicula>(`${ this.baseUrl }/movie/${id})`, { params: this.params});
  }

  getActores(id: string):Observable<Cast[]>{
    return this.http.get<Actores>(`${ this.baseUrl }/movie/${ id }/credits`, {
      params: this.params
    }).pipe(
      map( resp => resp.cast )
    );

  }
}
