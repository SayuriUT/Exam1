import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MascotasPage } from '../mascotas/mascotas';
import { FavProvider } from '../../providers/fav/fav';

/**
 * Generated class for the FavPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fav',
  templateUrl: 'fav.html',
})
export class FavPage {
  items = [];
  mascotas = [];
  mascota = MascotasPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fav: FavProvider) {
    this.items = this.fav.getFavoritos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavPage');
  }
  verMascota(item){
    this.navCtrl.push(this.mascota,{mascota: item});
  }
}
