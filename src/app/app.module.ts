import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { HttpClientModule } from '@angular/common/http';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardsComponent } from './components/cards/cards.component';
import { DivisorComponent } from './components/divisor/divisor.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditArticulosComponent } from './components/edit-articulos/edit-articulos.component';
import { ListArticulosComponent } from './components/list-articulos/list-articulos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MensajeConfirmacionComponent } from './components/shared/mensaje-confirmacion/mensaje-confirmacion.component';
//importamos el modulo que contiene todo lo de angular material
import { MatPaginatorModule } from '@angular/material/paginator';

import { AngularMaterialModule } from './components/shared/angular-material/angular-material.module';

import { ReactiveFormsModule } from '@angular/forms';
import { InicioComponent } from './components/inicio/inicio.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    CarruselComponent,
    FooterComponent,
    CardsComponent,
    DivisorComponent,
    EditArticulosComponent,
    ListArticulosComponent,
    NavbarComponent,
    MensajeConfirmacionComponent,
    InicioComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OAuthModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    MatPaginatorModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
