import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 18000,
    },
    {
      nombre: 'Vegueta',
      poder: 8000,
    },
  ];

  nuevo: Personaje = {
    nombre: 'Kakaroto',
    poder: 1110,
  };
  agregarNuevoPersonaje( argumento:Personaje ){
    this.personajes.push(argumento);
  }

  constructor(private dbzService: DbzService){
  
    
  }
}
