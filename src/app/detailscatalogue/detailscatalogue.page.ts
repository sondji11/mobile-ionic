import { DetailsService } from './../services/details.service';
import { Produits } from './../models/produits';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-detailscatalogue',
  templateUrl: './detailscatalogue.page.html',
  styleUrls: ['./detailscatalogue.page.scss'],
})
export class DetailscataloguePage implements OnInit {

 

  produitsdetails: any 
  
  Details:any|null=null;
  sonn:Observable<any>|null=null
  constructor( private DetailsService:DetailsService,private router:ActivatedRoute) { }

  ngOnInit(): void {

    // let id=this.router.url
    
    const detid=this.router.snapshot.params['id']
    this.sonn =this.DetailsService.produits$(detid)
    // alert(detid)
    this.DetailsService.produits$(detid).subscribe(data => 
      
      {this.produitsdetails=data}
      )
      console.log(this.produitsdetails);
   

}
}
