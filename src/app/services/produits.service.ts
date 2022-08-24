import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators'
import { catalogue } from '../models/catalogues';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  
  private url:string = "http://localhost:8000/api/catalogue"

  constructor(private http:HttpClient){ }
      all(): Observable<catalogue> {
          return this.http.get<catalogue>(this.url).pipe(
          map(
            data=>{
                let catalogue:catalogue={
                  burgers:data["hydra:member"][0].burger,
                  menus:data["hydra:member"][1].menu,
                  combiner: [...data["hydra:member"][0].burger,...data["hydra:member"][1].menu],
                 
                }
                // console.log(catalogue);
                
                
              return catalogue
      }
     )
    )
  }

  produits$ = (id:number) => {
    return this.http.get<any>(`${this.url}/${id}`)
  }
}
