import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  loading: boolean = false;
  test: boolean = true;

  public redirectTo: string;

  constructor(private _route: ActivatedRoute, private _router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this._route.queryParams.subscribe(params => {
            this.redirectTo = params['redirectTo'] || null;
        });
  }

  login() {
    this.loading = true;

    if (this.test) {
      //test success
      // sessionStorage.setItem("AuthToken", base64Url.encode(this.user.username + ":" + this.user.password));
      sessionStorage.setItem("AuthToken", "testValue");
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
