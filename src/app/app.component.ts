import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menu = [
    {
      nombre:"Inicio",
      enlace:"inicio",
      class:"nav-link active"
    },
    {
      nombre:"Terapias",
      enlace:"terapias",
      class:"nav-link"
    },
    {
      nombre:"Cursos",
      enlace:"cursos",
      class:"nav-link"
    },
    {
      nombre:"Consultas",
      enlace:"consultas",
      class:"nav-link"
    },
    {
      nombre:"Contactanos",
      enlace:"contacto",
      class:"nav-link"
    },
    {
      nombre:"Profesionales",
      enlace:"profesionales",
      class:"nav-link"
    }
  ]
}