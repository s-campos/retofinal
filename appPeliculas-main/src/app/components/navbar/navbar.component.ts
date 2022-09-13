import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  buscarPeli(texto :string){

    texto = texto.trim()    //trim borrra los espacios
    if (texto.length === 0){
      return
    }
    this.router.navigate(['/buscar',texto])
  }

}
