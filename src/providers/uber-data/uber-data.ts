import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";

@Injectable()
export class UberDataProvider {
  private url: string = 'http://localhost:8888';
  constructor(private http: HttpClient) {
    console.log('Hello UberDataProvider Provider');
  }

  public get(cookie: string): Observable<any> {
    return this.http.get(this.url, {
      headers: new HttpHeaders()
        .set("X-Cookies", cookie)
    })
  }

}
