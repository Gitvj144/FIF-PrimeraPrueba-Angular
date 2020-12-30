import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RentaComponent } from './renta/renta/renta.component';
import { RentaRoutingModule } from './renta-routing.module';
import { FormularioComponent } from './component/formulario/formulario/formulario.component';
import { NavbarRentaComponent } from './component/navbar-renta/navbar-renta.component';
import { EnlacesComponent } from './component/enlaces/enlaces.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './interceptors/interceptor.service';


@NgModule({
  declarations: [
  RentaComponent,
  FormularioComponent,
  NavbarRentaComponent,
  EnlacesComponent
],
  imports: [
    CommonModule,
    RentaRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }]
})
export class RentaModule { }
