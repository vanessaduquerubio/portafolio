import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HerramientasComponent } from './components/herramientas/herramientas.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselModule, } from 'ngx-owl-carousel-o';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HerramientasComponent,
    ProyectosComponent,
    ContactoComponent,
    NavbarComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
