import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UberCookiePage } from './uber-cookie';

@NgModule({
  declarations: [
    UberCookiePage,
  ],
  imports: [
    IonicPageModule.forChild(UberCookiePage),
  ],
})
export class UberCookiePageModule {}
