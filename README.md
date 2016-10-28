# ng2-colorpicker

Simple and lightweight colorpicker component for angular2

* no third-party dependencies
* simple for use

##USAGE
1. Import `DatePicker` component in `app.module.ts`
  ```ts
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  import { FormsModule } from '@angular/forms';
  import { HttpModule } from '@angular/http';
  
  import { DatePicker } from 'ng2-colorpicker/ng2-colorpicker';

  import { AppComponent } from './app.component';
  
  @NgModule({
    declarations: [
      Appcomponent,
      DatePicker
    ],
    imports: [
      BrowserModule,
      FormsModule,
      HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule {}
  ```
