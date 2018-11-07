import { Component } from '@angular/core';
// 通信中の画面ロックをするLoadingController
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { EventProvider } from '../../providers/event/event';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  // 検索バーの入力値を保持する
  keywords: string = "";
  // 検索結果のイベントを保持する
  events: any[] = [];

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public loadingCtrl: LoadingController,
      public eventProvider: EventProvider,
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  // 検索バーで検索された場合に動作する。入力されたキーワードでイベントプロバイダーを呼び出し。
  getEvents(ev) {
    const searchKeywords:string = this.keywords.trim();

    if (!searchKeywords) return;

    const loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loader.present();

    const kwds = searchKeywords.split(' ').filter(v => v !== "");
    this.eventProvider.search(kwds).subscribe((body: any) => {
      if (body && body.events) {
        if (this.keywords === searchKeywords) {
          this.events = body.events;
        }
      }
      loader.dismiss();
    }, (error: any) => {
      loader.dismiss();
    })
  }
}