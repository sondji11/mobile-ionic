import { ConnexionPageModule } from './connexion/connexion.module';
import { ConnexionPageRoutingModule } from './connexion/connexion-routing.module';
import { DetailscataloguePageRoutingModule } from './detailscatalogue/detailscatalogue-routing.module';
import { DetailscataloguePageModule } from './detailscatalogue/detailscatalogue.module';
import { CataloguePageModule } from './catalogue/catalogue.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CataloguePageRoutingModule } from './catalogue/catalogue-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,CataloguePageRoutingModule,CataloguePageModule,HttpClientModule,DetailscataloguePageModule,DetailscataloguePageRoutingModule,ConnexionPageRoutingModule,ConnexionPageModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})

export class AppModule {
 
}
