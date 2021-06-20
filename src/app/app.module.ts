import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { TerapiasComponent } from './terapias/terapias.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { UserInformationComponent } from './inicio/user-information/user-information.component';
import { CursosComponent } from './cursos/cursos.component';
import { ListaCursosComponent } from './cursos/lista-cursos/lista-cursos.component';
import { CursoComponent } from './cursos/lista-cursos/curso/curso.component';
import { AbmComponent } from './Usuarios/abm/abm.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ConsultasComponent,
    TerapiasComponent,
    ContactoComponent,
    LoginComponent,
    UserInformationComponent,
    CursosComponent,
    ListaCursosComponent,
    CursoComponent,
    AbmComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]

  
})
export class AppModule { }


