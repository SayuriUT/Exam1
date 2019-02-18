import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { MascotasPage } from '../mascotas/mascotas';
import { SearchPage } from '../search/search';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
mascotas = [];
mascota = MascotasPage;
search = SearchPage;
  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.http.get('/v1/klfst?&category=4020&offset=1&lim=29&lang=es')
    .subscribe(data => {
      if(data.hasOwnProperty('list_ads')){
        this.mascotas = data['list_ads'];
      }
      // console.log(JSON.stringify(data));
    },
    error =>
    {
      console.log(JSON.stringify(error));
    });
  }

  verMascota(mascota){
    this.navCtrl.push(this.mascota,{mascota: mascota});
  }
  buscar(){
    this.navCtrl.push(this.search, {mascotas: this.mascotas});
  }

}
