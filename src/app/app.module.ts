import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RentaModule } from './modules/renta/renta.module';
import { LandingModule } from './modules/landing/landing.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingModule,
    RentaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
