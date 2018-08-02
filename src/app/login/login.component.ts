import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgModel, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: any = {};

  returnUrl: string;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
  }

  doLogin(f: NgForm) {
  if (f.valid) {
      console.log(f.value);
      f.form.get('email').disable();
      f.form.get('password').disable();
        this.http.post('/api/login', f.value).subscribe((v: any) => {
        localStorage.setItem('LoginToken', v);
        // this.router.navigateByUrl(this.returnUrl);
        },
        () => {
          f.form.get('email').enable();
          f.form.get('password').enable();
        });
    } else {
    }
  }

}
