import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/modules/landing/landing.module')
      .then((m) => m.LandingModule),
    pathMatch: 'full',
  },
  {
    path: 'renta',
    loadChildren: () => import('../app/modules/renta/renta.module')
      .then((m) => m.RentaModule),
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
