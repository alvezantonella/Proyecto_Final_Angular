import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { TerapiasComponent } from './terapias/terapias.component';
import { CursosComponent } from './cursos/cursos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { UserInformationComponent } from './inicio/user-information/user-information.component';
import { AbmComponent } from './Usuarios/abm/abm.component';



const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'consultas', component: ConsultasComponent},
  {path: 'terapias', component: TerapiasComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'user_information', component: UserInformationComponent},
  {path: 'abm.component', component: AbmComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
