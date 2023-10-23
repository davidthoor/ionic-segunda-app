import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './conponents/menu/menu.component';
import { PagesModule } from './pages/pages.module';

// en esta parte se declaran los componentes 
// para poder usarce en toda la palicacion
@NgModule({
  declarations: [
    AppComponent,
    //AboutComponent,
    //ContacComponent,
   // HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
