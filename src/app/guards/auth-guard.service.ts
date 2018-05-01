import { Injectable } from '@angular/core';
import {
  Router,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  CanActivate /*estamos escribiendo bien el guard? que esté usando la interface adecuada*/
} from "@angular/router";

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private router
  ) { }
  /*
  CanActivate( Observable<boolean> | Promise<boolean>  | boolean{
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  )}
  */
  if (localStorage.getItem('currentUser')) {
      return true;
  }

}
