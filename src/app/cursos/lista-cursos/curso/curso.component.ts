import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Admin/abm/service.service';
import { Cursos } from 'src/app/cursos/clase/cursos';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})

/*export class CursoComponent implements OnInit {
  @Input() curso:any;
  constructor() { }
  ngOnInit(): void {
  }
}*/

export class CursoComponent implements OnInit {
  @Input() curso: Cursos = new Cursos();

  coursesArray: Cursos[] = [
  ];


  selectedCursos: Cursos = new Cursos();

  constructor(private cursos: ServiceService) {

  }
  ngOnInit(): void {
    console.log(this.curso)

  }

  addCart(cursos: Cursos) {
    this.selectedCursos.id = cursos.id;
    this.selectedCursos.title = cursos.title;
    this.selectedCursos.description = cursos.description;
    this.selectedCursos.cost = cursos.cost;
    this.selectedCursos.imagen = cursos.imagen;

    sessionStorage.setItem("curso" + cursos.id, JSON.stringify(this.selectedCursos));
  }
}