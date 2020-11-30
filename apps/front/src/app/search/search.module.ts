import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './components/route/home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [HomeComponent],
})
export class SearchModule {}
