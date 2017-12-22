import {Component, ElementRef, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import * as _ from 'lodash';

declare var google;
declare var MarkerClusterer;

@IonicPage()
@Component({
  selector: 'page-uber-map',
  templateUrl: 'uber-map.html',
})
export class UberMapPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = this.navParams.get('data').items;
    this.items = _.filter(this.items, t => t.latitude && t.longitude);

    const lat = _.map(this.items, 'latitude');
    const lng = _.map(this.items, 'longitude');
    const markers = _.zip(lat, lng).map(t => ({lat: t[0], lng: t[1]})).map(t => new google.maps.Marker({
      position: t,
    }));

    _.zip(this.items, markers).forEach(t => t[0].marker = t[1]);
  }

  loadMap() {
    let latLng = new google.maps.LatLng(37.608211, -122.086430);

    let mapOptions = {
      center: latLng,
      zoom: 9,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

  public ionViewDidLoad() {
    console.log('ionViewDidLoad UberMapPage');
    this.loadMap();

    new MarkerClusterer(this.map, _.map(this.items, 'marker'),
      {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
  }

}
