import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ContadorApp';
  iniciador:number = 0;
  base:number = 5;

  acumulado(valor:number){
    this.iniciador+=valor;
  }
}
