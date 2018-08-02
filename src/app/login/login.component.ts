import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgModel, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface LoginModel {
  email?: string;
  password?: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: LoginModel = {};
  rememberMe = false;
  returnUrl: string;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
    this.login.email = localStorage.getItem('email');
    this.rememberMe = !!localStorage.getItem('email');
  }

  changeRememberMe(input: HTMLInputElement) {
    if (!input.checked) {
      localStorage.removeItem('email');
    }
  }
  doLogin(f: NgForm) {
  if (f.valid) {
      console.log(f.value);
      localStorage.setItem('email', f.form.get('email').value);
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
