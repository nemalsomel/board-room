import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PlayerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({ 
  name: 'plyersroom', 
  segment: 'playersroom/:room_id',
  defaultHistory: ["playersroom/:room_id"]
 })
@Component({
  selector: 'page-player',
  templateUrl: 'player.html',
})
export class PlayerPage {

  room_id: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log("Recieved: " + navParams.get('room_id'));
    this.room_id = navParams.get('room_id');
    console.log(this.room_id);
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad PlayerPage');
  }

}
