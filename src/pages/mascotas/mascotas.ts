import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavProvider } from '../../providers/fav/fav';


/**
 * Generated class for the MascotasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mascotas',
  templateUrl: 'mascotas.html',
})
export class MascotasPage {
  mascota= {};
  imgs=[];


  constructor(public navCtrl: NavController, public navParams: NavParams, public fav: FavProvider) {
    this.mascota=this.navParams.get('mascota');
    if(this.mascota.ad.hasOwnProperty('images')){
      this.imgs=this.mascota.ad.images;
    }
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad MascotasPage');
  }
favoritos(mascota){
  this.fav.addFavoritos(mascota);
}
 
}
