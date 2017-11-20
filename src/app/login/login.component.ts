import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  loading: boolean = false;

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
  }

  login() {
    this.loading = true;
    this.toastr.error("Login Failed");
  }

}
