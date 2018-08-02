import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from 'node_modules/@angular/forms';

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
               ]
    });
  }

}
