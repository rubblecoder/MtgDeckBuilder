import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-deck',
  providers: [],
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.less']
})
export class DeckComponent implements OnInit {

  public deckId;

  constructor(private _route: ActivatedRoute, private authService:AuthenticationService) { }

  ngOnInit() {
    this._route.params
      .map((params) => params['id'])
      .subscribe((id) => {
          this.deckId = id;
      });

    this.authService.checkCredentials();
  }

}
