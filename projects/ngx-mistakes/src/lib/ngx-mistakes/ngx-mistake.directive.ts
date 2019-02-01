import {
  Directive,
  Input,
  OnInit,
  OnDestroy,
  DoCheck,
  Inject,
  HostBinding,
  forwardRef
} from '@angular/core';

import { Observable, Subscription, Subject, combineLatest } from 'rxjs';
import { filter, distinctUntilChanged, map } from 'rxjs/operators';

import { ErrorOptions } from '../interfaces/errors.interface';
import { toArray } from '../utils/to-array';

import { NgxMistakesDirective } from './ngx-mistakes.directive';

@Directive({
  selector: '[ngxMistake]'
})
export class NgxMistakeDirective implements OnInit, OnDestroy, DoCheck {
  @Input() set ngxMistake(value: ErrorOptions) {
    this.errorNames = toArray(value);
  }

  @Input() set when(value: ErrorOptions) {
    this.rules = toArray(value);
  }

  @HostBinding('hidden') hidden = true;

  rules: string[] = [];
  errorNames: string[] = [];
  subscription: Subscription;
  // tslint:disable-next-line:variable-name
  _states: Subject<string[]>;
  states: Observable<string[]>;

  constructor(
    @Inject(forwardRef(() => NgxMistakesDirective))
    private ngxMistakes: NgxMistakesDirective
  ) {}

  ngOnInit() {
    this._states = new Subject<string[]>();
    this.states = this._states.asObservable().pipe(distinctUntilChanged());

    const errors = this.ngxMistakes.subject.pipe(
      filter(Boolean),
      // tslint:disable-next-line:no-bitwise
      filter(obj => !!~this.errorNames.indexOf(obj.errorName))
    );

    const states = this.states.pipe(
      // tslint:disable-next-line:no-shadowed-variable no-bitwise
      map(states => this.rules.every(rule => !!~states.indexOf(rule)))
    );

    this.subscription = combineLatest(states, errors).subscribe(
      // tslint:disable-next-line:no-shadowed-variable
      ([states, errors]) => {
        this.hidden = !(states && errors.control.hasError(errors.errorName));
      }
    );
  }

  ngDoCheck() {
    this._states.next(
      this.rules.filter(rule => (this.ngxMistakes.control as any)[rule])
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
