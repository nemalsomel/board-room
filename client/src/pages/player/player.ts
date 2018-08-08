import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PlayerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({ name: 'room_name', segment: 'room/:room_name' })
@Component({
  selector: 'page-player',
  templateUrl: 'player.html',
})
export class PlayerPage {

  room_name: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log("Recieved: " + navParams.get('room_name'));
    this.room_name = navParams.get('room_name');
    console.log(this.room_name);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayerPage');
  }

}
