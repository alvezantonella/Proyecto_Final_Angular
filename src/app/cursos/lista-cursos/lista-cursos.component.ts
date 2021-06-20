import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {
  cursos = [
    {
      imagen: "../../../assets/1.jpg",
      titulo: "Psicoanalisis",
      descripcion: "dsdsdg",
      precio: "$200"
    },
    {
      imagen: "../../../assets/6.jpg",
      titulo: "Cognitivo Conductual",
      descripcion: "ujkyutgy",
      precio: "$300"
    },
    {
      imagen: "../../../assets/Cuidar-de-la-naturaleza.jpg",
      titulo: "Gestalt",
      descripcion: "4576576",
      precio: "$200"
    },
    {
      imagen: "../../../assets/2.jpg",
      titulo: "Psicoanalisis",
      descripcion: "dbdre7667",
      precio: "$500"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
