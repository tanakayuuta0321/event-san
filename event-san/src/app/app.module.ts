import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EventProvider } from '../providers/event/event';

// イベントプロパイダーはHTTP通信するため、HttpClientModuleのインポートが必要
import { HttpClientModule } from '@angular/common/http';
import { BookmarkProvider } from '../providers/bookmark/bookmark';


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    // イベントプロパイダーはHTTP通信するため、HttpClientModuleのインポートが必要
    HttpClientModule,
    IonicModule.forRoot(MyApp)
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EventProvider,
    BookmarkProvider
  ]
})
export class AppModule {}
