import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpClientModule} from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MascotasPage } from '../pages/mascotas/mascotas';
import { TabsPage } from '../pages/tabs/tabs';
import { LaptopPage } from '../pages/laptop/laptop';
import { LaptopClickPage } from '../pages/laptop-click/laptop-click';
import { JuegosPage } from '../pages/juegos/juegos';
import { JuegosClickPage } from '../pages/juegos-click/juegos-click';
import { SearchPage } from '../pages/search/search';
import { FavPage } from '../pages/fav/fav';
import { FavProvider } from '../providers/fav/fav';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MascotasPage,
    TabsPage,
    LaptopPage,
    LaptopClickPage,
    JuegosPage,
    JuegosClickPage,
    SearchPage,
    FavPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MascotasPage,
    TabsPage,
    LaptopPage,
    LaptopClickPage,
    JuegosPage,
    JuegosClickPage,
    SearchPage,
    FavPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FavProvider
  ]
})
export class AppModule {}
