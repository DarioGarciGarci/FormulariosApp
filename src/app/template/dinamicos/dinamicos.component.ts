import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
    nombre: string,
    favoritos: Favorito[]
}

interface Favorito {
    id: number,
    nombre: string
}
@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {

  @ViewChild('formulario') formulario!: NgForm;

  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'Darío',
    favoritos: [
      {
        id: 1,
        nombre: 'Bioschock'
      },
      {
        id: 2,
        nombre: 'Hollow Knight'
      }
    ]

  }
  constructor() { }

  ngOnInit(): void {
  }

  guardar() {
    console.log('funciona',  this.formulario);
  }

  agregarJuego() {
    const juego: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    } 

    this.persona.favoritos.push({...juego});
    this.nuevoJuego = '';
  }

  quitar(index: number){
    this.persona.favoritos.splice(index, 1)
  }
}
