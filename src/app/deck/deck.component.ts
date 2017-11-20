import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.less']
})
export class DeckComponent implements OnInit {

  public deckId;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params
      .map((params) => params['id'])
      .subscribe((id) => {
          this.deckId = id;
      });
  }

}
