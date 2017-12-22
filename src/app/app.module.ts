import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {UberCookiePage} from "../pages/uber-cookie/uber-cookie";
import { UberDataProvider } from '../providers/uber-data/uber-data';

@NgModule({
  declarations: [
    MyApp,
    UberCookiePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UberCookiePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UberDataProvider
  ]
})
export class AppModule {}
