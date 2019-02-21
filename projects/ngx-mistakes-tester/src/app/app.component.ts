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
