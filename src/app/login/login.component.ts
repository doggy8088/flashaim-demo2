import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  returnUrl: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
  }

  doLogin() {
    localStorage.setItem('LoginToken', '123');
    this.router.navigateByUrl(this.returnUrl);
  }

}