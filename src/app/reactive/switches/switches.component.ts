import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [false, Validators.required],
    condiciones: [true, Validators.requiredTrue]
  })

  persona = {
    genero: 'F',
    notificaciones: true,
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      ...this.persona,
      condiciones: true
    });

    // this.miFormulario.get('condiciones')?.valueChanges.subscribe( condiciones => {
    //   console.log(condiciones);
    // })

    // this.miFormulario.valueChanges.subscribe( form => {
    //   console.log(form);
    // })

    this.miFormulario.valueChanges.subscribe( ({condiciones, ...rest}) => {
      this.persona = rest;
    })
  }

  guardar(){
    const formulario = {...this.miFormulario.value};
    
    console.log(formulario);
    
    delete formulario.condiciones;

    this.persona = formulario;
  }
}
