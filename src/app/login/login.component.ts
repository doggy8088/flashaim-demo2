import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: any = {};

  returnUrl: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
  }

  doLogin(user: NgModel, pass: NgModel) {
    user.control.disable();
    pass.control.disable();
    localStorage.setItem('LoginToken', '123');
    // this.router.navigateByUrl(this.returnUrl);
  }

}
