import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  private url:string = "http://localhost:8000/api/details"

  constructor(private http:HttpClient){ }
      
      produits$ (id:any):Observable<any>{
      
        // console.log((`${this.url}/${id}`))
        
      return this.http.get<any>(`${this.url}/${id}`)

      }
    

}

