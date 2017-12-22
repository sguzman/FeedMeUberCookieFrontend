import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Subject} from "rxjs/Subject";
import "rxjs/add/operator/mergeMap";
import {UberDataProvider} from "../../providers/uber-data/uber-data";
import {UberMapPage} from "../uber-map/uber-map";

@IonicPage()
@Component({
  selector: 'page-uber-cookie',
  templateUrl: 'uber-cookie.html',
  providers: [UberDataProvider]
})
export class UberCookiePage {
  cookie: string = '';
  data: any;
  submitSubject = new Subject<string>();
  constructor(public navCtrl: NavController, public navParams: NavParams, private uberD: UberDataProvider) {
    this.submitSubject.flatMap(s => this.uberD.get(s)).subscribe(
      s => this.data = s
    )
  }

  public submit() {
    this.submitSubject.next(this.cookie);
    this.navCtrl.push(UberMapPage, {
      data: this.data
    })
  }

  public static ionViewDidLoad() {
    console.log('ionViewDidLoad UberCookiePage');
  }

}
