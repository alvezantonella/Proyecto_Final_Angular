import { Component, OnInit } from '@angular/core';
import { Profesional } from '../profesional';


@Component({
  selector: 'app-profesionales',
  templateUrl: './profesionales.component.html',
  styleUrls: ['./profesionales.component.css']
})
export class ProfesionalesComponent {
  profesionalesArray: Profesional[] = [

    { id: 1, nombre: "Anto", profesion: "Psicologa Criminal", costo: 1 },
    { id: 2, nombre: "Mari", profesion: "Psicologa Forense", costo: 1 },
    { id: 3, nombre: "Flor", profesion: "Psicologa Social", costo: 1 }

  ];

  selectedProfesional: Profesional = new Profesional();

  addOrEdit() {
    if (this.selectedProfesional.id === 0) {
      this.selectedProfesional.id = this.profesionalesArray.length + 1;
      this.profesionalesArray.push(this.selectedProfesional);
    }
    this.selectedProfesional = new Profesional();
  }

  openForEdit(profesional: Profesional) {
    this.selectedProfesional = profesional;
  }

  delete() {
    if (confirm('Estas seguro que quieres eliminarlo?')) {
      this.profesionalesArray = this.profesionalesArray.filter(p => p != this.selectedProfesional);
      this.selectedProfesional = new Profesional();
    }
  }
}
