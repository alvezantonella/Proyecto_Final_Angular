import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { TerapiasComponent } from './terapias/terapias.component';
import { TarifasComponent } from './tarifas/tarifas.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'consultas', component: ConsultasComponent},
  {path: 'terapias', component: TerapiasComponent},
  {path: 'tarifas', component: TarifasComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'login', component: LoginComponent}
]





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
