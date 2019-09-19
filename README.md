# NgxMistakes

[![version](https://img.shields.io/npm/v/ngx-mistakes.svg)](https://www.npmjs.com/package/ngx-mistakes)
[![license](https://img.shields.io/npm/l/express.svg)](https://www.npmjs.com/package/ngx-mistakes)

<h1 align="center">
  <img width="40" valign="bottom" src="https://angular.io/assets/images/logos/angular/angular.svg">
  ngx-mistakes
</h1>

<h4 align="center">
  A declarative validation errors module for reactive forms based on the module by
  <a href="https://github.com/UltimateAngular/ngx-errors" target="_blank">Ultimate Angular</a>
</h4>

# Overview

### What is it?
The aim of this package is to be backwards compatible with ngx-errors, but solving the issues related to rxjs on Angular 8, since they seem to have abandoned the project.
Just replace the name of the package in your imports and every should working like before.

### Installation

```bash
npm i ngx-mistakes
```

### Fallback for ngxErrors

Replace **@ultimate/ngx-errors** with **ngx-mistakes**

```js
import { NgxErrorsModule } from 'ngx-mistakes';

@NgModule({ imports: [ NgxErrorsModule ] })
```

### Form Group Arrays

You can use the more modern module, NgxMistakes. It has the same sintax, but it has
support to handle validation in arrays of form groups

**app.module.ts**
```js
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
```

**app.component.ts**
```js
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <div [formGroup]="form">
      <input formControlName="name" />
      <div ngxErrors="name">
        <div ngxError="required" when="touched">
          The name is mandatory
        </div>
      </div>
      <div
        formArrayName="todos"
        *ngFor="let item of todosData.controls; let i = index"
      >
        <div [formGroupName]="i">
          <input formControlName="name" />
          <div ngxErrors="name" arr="todos" [idx]="i">
            <div ngxError="required" when="touched">
              The name is mandatory
            </div>
            <div ngxError="minlength" when="touched">
              The name must have at least 5 characters
            </div>
          </div>
          <input type="checkbox" formControlName="todo" />
          <div ngxErrors="todo" arr="todos" [idx]="i">
            <div ngxError="required" when="touched">
              The todo must be checked
            </div>
          </div>
        </div>
      </div>
    </div>
    <pre>{{ form.value | json }}</pre>
  `,
  styles: [
    `
      div[ngxErrors] {
        color: red;
      }
    `
  ]
})
export class AppComponent implements OnInit {
  form: FormGroup;

  get todosData() {
    return this.form.get('todos') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['List of Todos', [Validators.required]],
      todos: this.fb.array([
        this.fb.group({
          name: [
            'Lear Reactive Forms',
            [Validators.required, Validators.minLength(5)]
          ],
          todo: [false, [Validators.requiredTrue]]
        })
      ])
    });
  }
}
```

# Documentation

Please, check the original documentation at: <a href="https://github.com/UltimateAngular/ngx-errors" target="_blank">Ultimate Angular</a>

## License

MIT © [Ricardo Sánchez Gregorio](mailto:me@richnologies.io)
