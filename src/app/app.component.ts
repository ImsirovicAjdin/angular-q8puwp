// Render an Observable Date with the Async and Date pipes

// To turn this clock into a working clock instead of just pumping out 0 to infinity
// we need to push out a date (2)

import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-app',
  //templateUrl: './app.component.html',
  //styleUrls: [ './app.component.css' ]
  template: `
    <h1>{{clock | async}}</h1>
  `
})
export class AppComponent  {
  clock = Observable
      .interval(1000)
      .map(()=> new Date()); // (2) pushing out a date
}
