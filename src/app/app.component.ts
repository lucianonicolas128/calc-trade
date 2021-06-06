import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  valoresTotales: string[] = []

  constructor(
  ){
    // this.buildForm();

  }

  ngOnInit() {

  }

  calculator(){
    this.valoresTotales = [];
    let valor = parseInt(((<HTMLInputElement>document.getElementById('valor')).value));
    let porcentaje: number = parseInt(((<HTMLInputElement>document.getElementById('porcentaje')).value));
    let operaciones: number = parseInt(((<HTMLInputElement>document.getElementById('operaciones')).value));

    
    for (let i = 0; i < operaciones; i++){
      valor = valor*((porcentaje/100)+1);
      this.valoresTotales.push(valor.toString());
    }
  }

  /* buildForm(){
    this.form = this.formBuilder.group({
      valor: [''],
      porcentaje: [''],
      operaciones: [''],
    })
  } */



}
