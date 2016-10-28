import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgColorpicker } from './components/ng-colorpicker';

@NgModule({
  declarations: [
    NgColorpicker
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [NgColorpicker]
})
export class AppModule { }
