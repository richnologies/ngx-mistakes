import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxMistakesModule } from 'ngx-mistakes';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReactiveFormsModule, NgxMistakesModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
