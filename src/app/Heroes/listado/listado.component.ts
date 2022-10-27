import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

  heroes:string[] = ['SpiderMan', 'IronMan', 'Ant-Man', 'Super Man', 'Gatubela']
  heroeBorrado:string = ''

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
