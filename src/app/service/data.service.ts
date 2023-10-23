import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// cuando ejectuas un servicio y quires ver su contenido
//de una api se muestra con el tap
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }
  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(
      tap()
    )
  }
}
