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
The aim of this package is to be backwards compatible with ngx-errors, but solving the issues related to rxjs on Angular 7, since they seem to have abandoned the project.
Just replace the name of the package in your imports and every should working like before.

In the following days we will be adding some extra features to address some issues working with form group arrays.

### Installation

```bash
npm i ngx-mistakes
```

### Setup

Just add ngx-mistakes to your module:

```js
import { NgxErrorsModule } from 'ngx-mistakes';

@NgModule({ imports: [ NgxErrorsModule ] })
```

# Documentation

Please, check the original documentation at: <a href="https://github.com/UltimateAngular/ngx-errors" target="_blank">Ultimate Angular</a>

## License

MIT © [Ricardo Sánchez Gregorio](mailto:me@richnologies.io)
