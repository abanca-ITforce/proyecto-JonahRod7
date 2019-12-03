import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import { CountryComponent } from './country.component';
import { CountryCardComponent } from './country-card/country-card.component';


@NgModule({
  declarations: [CountryComponent, CountryCardComponent],
  imports: [
    CommonModule,
    CountryRoutingModule
  ]
})
export class CountryModule { }
