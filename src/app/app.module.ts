import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { TerapiasComponent } from './terapias/terapias.component';
import { TarifasComponent } from './tarifas/tarifas.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ConsultasComponent,
    TerapiasComponent,
    TarifasComponent,
    ContactoComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
