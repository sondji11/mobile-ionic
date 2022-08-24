import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailscataloguePage } from './detailscatalogue.page';

const routes: Routes = [
  {
    path: '',
    component: DetailscataloguePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailscataloguePageRoutingModule {}
