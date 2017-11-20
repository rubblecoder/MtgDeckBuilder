import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import base64Url from 'base64url-ts2';

export class User {
  constructor(
    public username: string,
    public password: string) { }
}

@Injectable()
export class AuthenticationService {

  constructor(private _route: ActivatedRoute, private _router: Router) { }

  login() {
    //Not Implemented Yet
  }

  checkCredentials() {
    if (sessionStorage.getItem("AuthToken") === null){
      //console.log("Not Authenticated: ", this._route.snapshot);
      this._router.navigate(['login'], {queryParams: { "redirectTo" : "/" + this._route.snapshot.url.join("/")}});
    } else {
      //console.log("Authenticated");
    }
  }

}
