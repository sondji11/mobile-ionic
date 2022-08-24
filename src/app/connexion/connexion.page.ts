import { TokenService } from './../services/token.service';
import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';
import { ICredential } from '../interface/credentiel';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  form: ICredential = {
    username: '',
    password: ''
  }
 
  
 
  constructor(private Auth:AuthentificationService,private TokenService:TokenService) { }

  ngOnInit(): void {
  }

  onSubmit():void{
    console.log(this.form)
    this.Auth.login(this.form).subscribe(
      data  =>{
        console.log(data.token)
      this.TokenService.saveToken(data.token) 
      } ,
      err  => console.log(err)

        // this.tokenService.saveToken(data.access_token)
    
    )         
  }

}
