import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-uber-map',
  templateUrl: 'uber-map.html',
})
export class UberMapPage {
  items: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = this.navParams.get('data').items;
    console.log(this.items);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UberMapPage');
  }

}
