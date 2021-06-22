  
import { Component, OnInit } from '@angular/core';
import { Profesional } from '../profesional';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-profesionales',
  templateUrl: './profesionales.component.html',
  styleUrls: ['./profesionales.component.css']
})
export class ProfesionalesComponent implements OnInit {
  profesionalesArray: Profesional[] = [

  ];

  selectedProfesional: Profesional = new Profesional();

  constructor(private profesionales: ServiceService){

  }
  ngOnInit(): void {
    this.profesionales.getProfesionales().subscribe((response:any)=>{
      this.profesionalesArray = response;
      console.log(this.profesionalesArray);
    })
  }

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

/*export class ProfesionalesComponent {

  profesionales!: Profesional[];
  showForm = false;
  a: Profesional = {
    id: 0,
    username: "",
    profesion: "",
    age: 0,
    cost: 0,
    role: "",
  }
  opResult = {
    success: false,
    error: false
  }
  msg = {
    msgInsertarSucces: "El usuario se inserto correctamente",
    msgActualizarSucces: "El usuario se actualizo correctamente"
  }

  opResultMsg = "";
  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this._userService.getUsers().subscribe((response: any) => {
      this.profesionales = response;
    })
  }

  fnShowForm() {
    this.showForm = !this.showForm;
  }

  submit(event: any) {
    event.preventDefault();
    if (this.a.id && "") {
      this._userService.insertarUsuario(this.profesionales).subscribe((response: any) => {
        console.log(response)
        this.profesionales.push(response);
        this.opResult.success = true
        this.showForm = false;
        this.opResultMsg = this.msg.msgInsertarSucces;
      })
    }
    else {
      this._userService.actualizarUsuario(this.a).subscribe((response: any) => {
        console.log(response)
        this.profesionales.map((item: Profesional) => {
          if (item.id === this.a.id) {
            item.username = this.a.username;
            item.profesion = this.a.profesion;
            item.age = this.a.age;
            item.cost = this.a.cost;
            item.role = this.a.role;
          }
          return item;
        })
        this.opResult.success = true
        this.showForm = false;
        this.opResultMsg = this.msg.msgActualizarSucces;
        // setTimeout(this.hide,2000);
      })
    }

  }

  onChange(event: any) {
    console.log(event)
    this.a.role = event.target.id === "admin" ? "Admin" : "Usuario"
  }

  update(profesional: any) {
    this.showForm = true;
    this.a.id = profesional.id
    this.a.username = profesional.username;
    this.a.profesion = profesional.profesion;
    this.a.age = profesional.age;
    this.a.cost = profesional.cost;
    this.a.role = profesional.role;
   
  }

  hide() {
    this.opResult.success = true
  }
}*/



