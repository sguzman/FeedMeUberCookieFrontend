import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Subject} from "rxjs/Subject";
import "rxjs/add/operator/mergeMap";
import {UberDataProvider} from "../../providers/uber-data/uber-data";

@IonicPage()
@Component({
  selector: 'page-uber-cookie',
  templateUrl: 'uber-cookie.html',
  providers: [UberDataProvider]
})
export class UberCookiePage {
  cookie: string = '';
  submitSubject = new Subject<string>();
  constructor(public navCtrl: NavController, public navParams: NavParams, private uberD: UberDataProvider) {
    this.submitSubject.flatMap(s => this.uberD.get(s)).subscribe(
      s => console.log(s)
    )
  }

  public submit() {
    this.submitSubject.next(this.cookie);
  }

  public static ionViewDidLoad() {
    console.log('ionViewDidLoad UberCookiePage');
  }

}
