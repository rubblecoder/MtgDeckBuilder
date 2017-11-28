import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-decks',
  providers: [],
  templateUrl: './decks.component.html',
  styleUrls: ['./decks.component.less']
})
export class DecksComponent implements OnInit {

  decks: object[] = decksData;

  constructor(private authService:AuthenticationService) { }

  ngOnInit() {
    this.authService.checkCredentials();
  }

}

export var decksData = [
  {id: 1, name: 'Dinos', type: 'Standard', color: 'RG', desc: 'Standard Stompy Dinos'},
  {id: 2, name: 'Fish', type: 'Standard', color: 'GU', desc: 'AggroCounter Fish'},  
  {id: 3, name: '5-Color Green', type: 'Modern', color: 'WUBRG', desc: 'Example'},
  {id: 4, name: 'Sui Skullbriar', type: 'EDH', color: 'BG', desc: 'Example'},
  {id: 5, name: 'Invasion Hypercube', type: 'Cube', color: 'WUBRG', desc: 'Example'},
  {id: 6, name: 'Inquest Fantasy', type: 'Cube', color: 'WUBRG', desc: 'Example'},
  {id: 7, name: 'Deck Example 1', type: 'Standard', color: 'RW', desc: 'Example'},
  {id: 8, name: 'Deck Example 2', type: 'Standard', color: 'BR', desc: 'Example'},
  {id: 9, name: 'Deck Example 3', type: 'Standard', color: 'WU', desc: 'Example'},
  {id: 10, name: 'Deck Example 4', type: 'Standard', color: 'R', desc: 'Example'}  
];
