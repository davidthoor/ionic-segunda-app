import { NgModule } from '@angular/core';
// comando para crear este modulo
// ng g m appRouting --flat
//este lo genera en la base del proyecto sin crear carpetas adicionales
// --dry-run es para la vista previa de lo que va generar el comando

import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContacComponent } from './pages/contact/contact.component';

const routes: Routes = [
  // aqui se crean la srutas que s evan a utilizar
  {
    path: 'home',
    component : HomeComponent
  },
  {
    path: 'about',
    component : AboutComponent
  },
  {
    path: 'contact',
    component : ContacComponent
  },
  {
    path: 'posts',
    //esta es la mejor forma de hacer la carga de modulos
    loadChildren : () => import('./pages/posts/posts.module').then(m => m.PostsModule)
  },
  //que se hace cuando la ruta no existe
  {
    path : "**",
    redirectTo : 'home'
  }
];

@NgModule({

  imports: [
   RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
