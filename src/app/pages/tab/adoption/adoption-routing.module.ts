import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdoptionPage } from './adoption.page';

const routes: Routes = [
  {
    path: '',
    component: AdoptionPage
  },
  {
    path: 'adoption-form',
    loadChildren: () => import('./adoption-form/adoption-form.module').then( m => m.AdoptionFormPageModule)
  },
  {
    path: 'adoption-request',
    loadChildren: () => import('./adoption-request/adoption-request.module').then( m => m.AdoptionRequestPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdoptionPageRoutingModule {}
