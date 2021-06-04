import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './core/navbar/navbar.component';
import { InicioComponent } from './core/inicio/inicio.component';
import { FuiRatingModule } from 'ngx-fomantic-ui';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FuiRatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
