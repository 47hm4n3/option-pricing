import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlackScholesComponent } from './black-scholes/black-scholes.component';
import { MonteCarloComponent } from './monte-carlo/monte-carlo.component';
import { PricingService } from './pricing.service';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    BlackScholesComponent,
    MonteCarloComponent,
    HttpClientModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PricingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
