import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  valoresTotales: any[] = [];
  valoresTotalesUSD: any[] = [];
  gananciasTotales: any[] = [];
  gananciasDiarias: any[] = [];
  valor!: number;
  aux!: number;

  constructor(
  ) {
    // this.buildForm();

  }

  ngOnInit() {

  }

  calculator() {
    this.valoresTotales = [];
    this.valoresTotalesUSD = [];
    this.gananciasTotales = [];
    this.gananciasDiarias = [];
    this.valor = parseInt(((<HTMLInputElement>document.getElementById('valor')).value));
    let porcentaje: number = parseInt(((<HTMLInputElement>document.getElementById('porcentaje')).value));
    let operaciones: number = parseInt(((<HTMLInputElement>document.getElementById('operaciones')).value));
    this.aux = this.valor;

    for (let i = 0; i < operaciones; i++) {
      this.valor = this.valor * ((porcentaje / 100) + 1);
      this.valoresTotales.push(this.valor);
      let aux4 = (this.valor / 164);
      this.valoresTotalesUSD.push(aux4);
      this.gananciasTotales.push((this.valor - this.aux));
      console.log(this.valor)
      let aux2 = this.valor;
      if (aux2) {
        this.gananciasDiarias.push((aux2 - this.valoresTotales[i - 1]));
      }
    }
  }

}
