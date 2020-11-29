import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchModule } from './search/search.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, SearchModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
