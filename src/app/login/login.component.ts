import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService, User } from '../authentication.service';
import { ToastrService } from 'ngx-toastr';
import base64Url from 'base64url-ts2';

@Component({
  selector: 'app-login',
  providers: [],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  loading: boolean = false;
  public user = new User('', '');
  public redirectTo: string;

  constructor(private _route: ActivatedRoute, private _router: Router, private _authService: AuthenticationService, private toastr: ToastrService) { }

  ngOnInit() {
    this._route.queryParams.subscribe(params => {
            this.redirectTo = params['redirectTo'] || null;
        });
  }

  login() {
    this.loading = true;

    //Call Auth Service Login Method once implemented
    //Just check to see if username is admin for now
    if (this.user.username == "admin") {
      //test success
      sessionStorage.setItem("AuthToken", base64Url.encode(this.user.username + ":" + this.user.password));
      this.toastr.success("Login Successful");
      this.loading = false;
      if (this.redirectTo) {
        this._router.navigate([this.redirectTo]);
      } else {
        this._router.navigate(['home']);
      }
    } else {
      //test failure
      this.toastr.error("Login Failed");
      this.loading = false;
    }
  }

}
