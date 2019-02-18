import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MascotasPage } from '../mascotas/mascotas';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  mascotas= [];
  items = [];
  mascotasPage= MascotasPage

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.mascotas = this.navParams.get('mascotas');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  getItems(ev: any){
    console.log(ev.target.value);
    this.items = this.mascotas.filter( mascota=> {
      return mascota.ad.locations[0].locations[0].label.toLowerCase() ==
      ev.target.value.toLowerCase()
    })
  }

  verMascota(item){
    this.navCtrl.push(this.mascotasPage, {mascota: item});
  }
  
}

