import { Component, OnInit } from '@angular/core';

let palabra:string = ""; 

const Intro = {
  Welcome:
    'Compiladores 2 Proyecto 1 \n By Fredy Estuardo Ramírez Moscoso \n 201700350',
};

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }
  
  mode: keyof typeof Intro = 'Welcome';
  defaults = Intro;
  pasar = ""
  

  ObtenerValor($event: Event): void {
   // $event;
    console.log($event);
  }
  escribirValor(): void{
   // console.log("PRUEBA "+palabra)
   this.pasar = this.defaults[this.mode];
  }
}
