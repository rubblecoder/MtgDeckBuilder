import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DecksComponent } from './decks/decks.component';
import { DeckComponent } from './deck/deck.component';

const routes: Routes = [
  {
    path: 'decks',
    component: DecksComponent,
    data: {
      title: 'Decks'
    }
  },
  {
    path: 'deck',
    component: DeckComponent,
    data: {
      title: 'Deck'
    }
  },
  {
    path: 'deck/:id',
    component: DeckComponent,
    data: {
      title: 'Deck'
    }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Home'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login'
    }
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
