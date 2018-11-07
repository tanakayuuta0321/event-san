// HttpParams でHTTPパラメータをconnpassのAPIに指定する
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
// HttpParams の戻り値を受け取るObservable
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EventProvider {

  constructor(public http: HttpClient) {
    console.log('Hello EventProvider Provider');
  }

  search(keywords: string[]): Observable<Object> {

    let params = new HttpParams()
      .append('order', '2')
      .append('count', '100');
    keywords.forEach(kwd => params = params.append('keyword', `${kwd}`));

    return this.http.get("/connpass/api", { params: params });
  }

  get(eventId: string): Observable<Object> {

    let params = new HttpParams()
      .append('event_id', `${eventId}`);

    return this.http.get("/connpass/api", { params: params });
  }

}
