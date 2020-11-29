import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { HomeComponent } from './components/route/home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, SearchRoutingModule],
  exports: [HomeComponent],
})
export class SearchModule {}
