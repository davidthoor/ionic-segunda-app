import { Component } from '@angular/core';
import { DataService } from '../../service/data.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  mensajes: any
  constructor(private dataService : DataService){
 }
 ngOnInit(){
  this. mensajes = this.dataService.getPosts()
  //.subscribe( (posts : any) =>  {
   // this.mensajes = posts
  //})
 }
 escuchaClick( id:number ){
  console.log('Click en: ' , id)
 }
}
