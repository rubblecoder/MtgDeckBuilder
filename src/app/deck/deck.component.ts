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

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .map((params) => params['id'])
      .subscribe((id) => {
          this.deckId = id;
      });
  }

}
