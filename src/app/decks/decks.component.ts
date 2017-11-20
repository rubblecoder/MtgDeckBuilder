import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-decks',
  providers: [AuthenticationService],
  templateUrl: './decks.component.html',
  styleUrls: ['./decks.component.less']
})
export class DecksComponent implements OnInit {

  constructor(private authService:AuthenticationService) { }

  ngOnInit() {
    this.authService.checkCredentials();
  }

}
