import { NgModule } from '@angular/core';

import { NgxErrorDirective } from './ngx-errors/ngx-error.directive';
import { NgxErrorsDirective } from './ngx-errors/ngx-errors.directive';

const directives = [NgxErrorDirective, NgxErrorsDirective];

@NgModule({
  declarations: [...directives],
  exports: [...directives]
})
export class NgxErrorsModule {}
