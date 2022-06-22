import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') formulario!: NgForm;

  initForm = {
    producto: 'RTX 3090',
    precio: 10,
    existencias: 10
  }

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
    //console.log(this.formulario);
    console.log('Guardado correcto');
    this.formulario.resetForm({
      precio: 0,
      existencias: 0
    });
  }
}
