import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
/*
  Generated class for the FavProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavProvider {
favoritos=[];
  constructor(public toastCtrl: ToastController) {
    console.log('Hello FavProvider Provider');
  }
 addFavoritos(mascota){
   this.favoritos.push(mascota);
   const toast = this.toastCtrl.create({
      message: 'Mascota agregada a favoritos',
      duration: 3000,
      position: 'top'
   });
   toast.present();
 }

 getFavoritos(){
   return this.favoritos;
 }
}
