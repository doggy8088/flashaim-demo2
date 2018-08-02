import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (!!localStorage.getItem('LoginToken')) {
      return true;
    } else {
      const nextUrl = '/' + state.url;
      this.router.navigateByUrl('/login?returnUrl=' + nextUrl);
      return false;
    }
  }
}
