import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.css']
})
export class OperacionesComponent implements OnInit {

  titulo = 'Cálculo de Temperaturas';
  numero : number = 0;
  numero2 : number = 0;
  numero3 : number = 0;

  resultadoCentigradoAFarenheit : number = 0;
  resultadoCentigradoAKelvin : number = 0;

  resultadoKelvinaCentigrados : number = 0;
  resultadoKelvianaFarenheit : number = 0;

  resultadoFaC  : number = 0;
  resultadoFaL  : number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  centigradosAFarenheit():void{
    // (grados * 1.8) + 32
   this.resultadoCentigradoAFarenheit =  (this.numero * 1.8) + 32;
    

  }

  centigradosAKelvin():void{
    //C + 273.15.
    this.resultadoCentigradoAKelvin =  + 273.15;
  }

  convertirGrados(): void{
    this.resultadoCentigradoAFarenheit =  (this.numero * 1.8) + 32;
    this.resultadoCentigradoAKelvin = (this.numero  + 273.15);
  }

  convertirGrados2(): void{
    this.resultadoKelvinaCentigrados = (this.numero2  - 273.15);
    this.resultadoKelvianaFarenheit =     1.8*((this .numero2 ) - 273.15) + 32;
  }

  convertirGrados3(): void{
    this.resultadoFaC = (this.numero3-32)/1.8;
    this.resultadoFaL =   (5/9)*((this.numero3) - 32) + 273.15;   
  }

}
