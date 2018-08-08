import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';
import { RoomPage } from '../room/room';
import { PlayerPage } from '../player/player';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  room_name: string = '';

  constructor(public navCtrl: NavController, public httpClient: HttpClient) {
  }

  newRoom() {
    this.navCtrl.push(RoomPage);
  }

  connectRoom(){
    console.log(this.room_name);
    this.navCtrl.push(PlayerPage, {room_name: this.room_name});
  }
}
