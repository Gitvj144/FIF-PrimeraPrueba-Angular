import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { LandingRoutingModule } from './landing-routing.module';
import { FormularioComponent } from './component/formulario/formulario.component';
import { LogosComponent } from './component/logos/logos/logos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarLandingComponent } from './component/navbar-landing/navbar-landing.component';



@NgModule({
  declarations: [
    LandingComponent,
    FormularioComponent,
    LogosComponent,
    NavbarLandingComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    ReactiveFormsModule
  ]
})
export class LandingModule { }
