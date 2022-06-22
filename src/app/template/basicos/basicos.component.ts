import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') formulario!: NgForm;


  constructor() { }

  ngOnInit(): void {
  }

  nombreValido(): boolean{
    return this.formulario?.form.controls['producto']?.invalid &&
    this.formulario?.form.controls['producto']?.touched;
  }

  precioValido(): boolean{
    return this.formulario?.form.controls['precio']?.value <= 0 &&
      this.formulario?.form.controls['precio']?.touched;
  }

  guardar(){
    console.log(this.formulario);
  }
}
