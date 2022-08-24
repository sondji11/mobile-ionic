import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ICredential } from '../interface/credentiel';
import { IToken } from '../interface/token';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  url = 'http://127.0.0.1:8000/api/email_check'
  constructor(private http: HttpClient) { }

  login(credentials: ICredential): Observable<IToken>{
    return this.http.post<IToken>(this.url, credentials)
  }
}
