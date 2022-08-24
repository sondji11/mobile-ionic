import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'catalogue',
    loadChildren: () => import('./catalogue/catalogue.module').then( m => m.CataloguePageModule)
  },
  {
    path: 'detailscatalogue/:id',
    loadChildren: () => import('./detailscatalogue/detailscatalogue.module').then( m => m.DetailscataloguePageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  }
   
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
