import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { JuegosClickPage } from '../juegos-click/juegos-click';

/**
 * Generated class for the JuegosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-juegos',
  templateUrl: 'juegos.html',
})
export class JuegosPage {
  juegos = [];
  juego = JuegosClickPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.http.get('/v1/klfst?&category=5060&offset=1&lim=29&lang=es')
    .subscribe(data => {
      if(data.hasOwnProperty('list_ads')){
        this.juegos = data['list_ads'];
      }
      console.log(JSON.stringify(data));
    },
    error =>
    {
      console.log(JSON.stringify(error));
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JuegosPage');
  }
  verJuegos(juego){
    this.navCtrl.push(this.juego,{juego: juego});
  }
}
