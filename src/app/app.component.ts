import { Component } from '@angular/core';
declare var loading_screen: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  title = 'app';

  ngOnInit(): void {
    loading_screen.finish();
  }
}
