import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '../../../node_modules/@angular/common/http';

/**
 * Generated class for the RoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-room',
  templateUrl: 'room.html',
})
export class RoomPage {

  room_name: string = 'Creating room...';

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient) {
    this.httpClient.get(`http://${location.hostname}:3000/new-room`).subscribe((data: any) => {
    console.log(data);
    this.room_name = data.data;
  })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoomPage');
  }

}
