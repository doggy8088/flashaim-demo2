import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, AbstractControl } from 'node_modules/@angular/forms';

function blacklistValidator(control: AbstractControl) {
  const val: string = control.value;
  if (val.indexOf('Will') >= 0) {
    return {'blacklist': '您使用了黑名單上面的文字'};
  } else {
    return null;
  }
}


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      'name' : ['Will',
                [Validators.required, Validators.minLength(3)]
               ],
      'email': ['will.huang@miniasp.com',
                [Validators.required]
               ],
      'todos': this.fb.array([
          this.fb.group({
            'title' : ['', [Validators.required, blacklistValidator]],
            'isDone': false
          }),
          this.fb.group({
            'title' : ['', [Validators.required, blacklistValidator]],
            'isDone': false
          })
      ])
    });

  }

  btnAdd() {

    const todos = this.form.get('todos') as FormArray;
    todos.push(this.fb.group({
      'title' : ['', [Validators.required, blacklistValidator]],
      'isDone': false
    }));
  }

}
