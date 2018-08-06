import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public httpClient: HttpClient) {
  }

  newRoom() {
    this.httpClient.get('http://localhost:3000/new-room').subscribe(data => {
        console.log(data);
      })
  }
}
