# ng2-colorpicker

Simple and lightweight colorpicker component for angular2

* no third-party dependencies
* simple for use

##USAGE
1. Import `NgColorpicker` component in `app.module.ts`
  ```ts
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  import { FormsModule } from '@angular/forms';
  import { HttpModule } from '@angular/http';
  
  import { NgColorpicker } from 'ng-colorpicker/ng-colorpicker';

  import { AppComponent } from './app.component';
  
  @NgModule({
    declarations: [
      Appcomponent,
      NgColorpicker
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
2. Use `<app-colorpicker>` in `app.component.html`
     ```html
     <app-colorpicker ></datepicker>
     ```
