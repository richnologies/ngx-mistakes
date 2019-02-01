# NgxMistakes

[![version](https://img.shields.io/npm/v/ngx-mistakes.svg)](https://www.npmjs.com/package/ngx-mistakes)
[![license](https://img.shields.io/npm/l/express.svg)](https://www.npmjs.com/package/ngx-mistakes)

<h1 align="center">
  <img width="40" valign="bottom" src="https://angular.io/assets/images/logos/angular/angular.svg">
  ngx-mistakes
</h1>

<h4>
  A declarative validation errors module for reactive forms based on module by
  <a href="https://github.com/UltimateAngular/ngx-errors">Ultimate Angular</a>
</h4>

# Overview

### What is it?
The aim is to be backwards compatible with ngx-errors, but solving the issues related to rxjs on Angular 7, since they seem to have abandond the project.
Just replace the name of the package on your imports and every should keep working like before.

In the following days we will be adding some extra features to address some issue working with form group arrays.

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

Please, check the original documentation at: <a href="https://github.com/UltimateAngular/ngx-errors">Ultimate Angular</a>

## License

MIT © [Ricardo Sánchez Gregorio](mailto:me@richnologies.io)
