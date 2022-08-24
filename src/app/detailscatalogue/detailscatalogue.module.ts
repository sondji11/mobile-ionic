import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailscataloguePageRoutingModule } from './detailscatalogue-routing.module';

import { DetailscataloguePage } from './detailscatalogue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailscataloguePageRoutingModule
  ],
  declarations: [DetailscataloguePage]
})
export class DetailscataloguePageModule {}
