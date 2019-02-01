import { NgModule } from '@angular/core';

import { NgxMistakeDirective } from './ngx-mistakes/ngx-mistake.directive';
import { NgxMistakesDirective } from './ngx-mistakes/ngx-mistakes.directive';

const directives = [NgxMistakeDirective, NgxMistakesDirective];

@NgModule({
  declarations: [...directives],
  exports: [...directives]
})
export class NgxMistakesModule {}
