import { Component} from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent  {
  title = 'ContadorApp';
  iniciador:number = 0;
  base:number = 5;

  acumulado(valor:number){
    this.iniciador+=valor;
  }

}
