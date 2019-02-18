import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the JuegosClickPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-juegos-click',
  templateUrl: 'juegos-click.html',
})
export class JuegosClickPage {
  juego= {};
  imgs=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.juego=this.navParams.get('juego');
    if(this.juego.ad.hasOwnProperty('images')){
      this.imgs=this.juego.ad.images;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JuegosClickPage');
  }

}
