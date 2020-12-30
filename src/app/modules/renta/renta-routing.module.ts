import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RentaComponent } from './renta/renta/renta.component';

const routes: Routes = [
  {
    path: '',
    component: RentaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RentaRoutingModule {}
