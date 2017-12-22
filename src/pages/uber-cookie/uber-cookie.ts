import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {Subject} from "rxjs/Subject";
import "rxjs/add/operator/mergeMap";
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UberMapPage} from "../uber-map/uber-map";

@IonicPage()
@Component({
  selector: 'page-uber-cookie',
  templateUrl: 'uber-cookie.html',
})
export class UberCookiePage {
  cookie: string = '';
  submitSubject = new Subject();
  private url: string = 'http://localhost:8888';
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public loadingCtrl: LoadingController) {
    this.submitSubject.flatMap(s => this.get(this.cookie)).subscribe(
      s => {
        this.navCtrl.push(UberMapPage, {
          data: s
        })
      }
    )
  }

  public get(cookie: string): Observable<any> {
    this.loadingCtrl.create({
      dismissOnPageChange: true,
      spinner: 'crescent',
      content: 'Please wait...',
    }).present();
    return this.http.get(this.url, {
      headers: new HttpHeaders()
        .set("X-Cookies", cookie)
    })
  }

  public static ionViewDidLoad() {
    console.log('ionViewDidLoad UberCookiePage');
  }

}
