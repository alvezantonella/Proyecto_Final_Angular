import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Admin/abm/service.service';
import { Cursos } from 'src/app/clase/cursos';

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
  @Input() curso:any;
  coursesArray: Cursos[] = [

  ];

  selectedCursos: Cursos = new Cursos();

  constructor(private cursos: ServiceService){

  }
  ngOnInit(): void {
   console.log(this.curso) 
   
  }

  addOrEdit() {
    if (this.selectedCursos.id === 0) {
      this.selectedCursos.id = this.coursesArray.length + 1;
      this.coursesArray.push(this.selectedCursos);
    }
    this.selectedCursos = new Cursos();
  }

  openForEdit(profesional: Cursos) {
    this.selectedCursos = profesional;
  }

  delete() {
    if (confirm('Estas seguro que quieres eliminarlo?')) {
      this.coursesArray = this.coursesArray.filter(p => p != this.selectedCursos);
      this.selectedCursos = new Cursos();
    }
  }
}