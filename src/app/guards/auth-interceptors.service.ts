import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from "@angular/common/http";

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/throw';

@Injectable()
export class AuthInterceptorsService implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    try{
      request = request.clone({
      //clonamos en el try
      setHeaders: {
        Authorization: `JWT ${currentUser.token}`
        
      }
    });
    return next.handle(request);
    }
    catch (err){
    return next.handle(request);
    }
  }
}
