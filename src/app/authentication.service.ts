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

    // Example of what the code should look like
    
    // return this._dataService.testConnection(user.username, user.password)
    //   .map((resp: Response) => {
    //     sessionStorage.setItem("AuthToken", base64Url.encode(user.username + ":" + user.password));
    //     //console.log("Login Loading Success");
    //     resp.json();
    //   })
    //   .catch((err: Response) => {
    //     let details = err.json();
    //     //console.error("Error getting results: ", details);
    //     return Observable.throw(details);
    //   });
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
