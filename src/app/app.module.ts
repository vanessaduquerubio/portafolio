import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HerramientasComponent } from './pages/herramientas/herramientas.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { CarouselModule, } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HerramientasComponent,
    ProyectosComponent,
    ContactoComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
