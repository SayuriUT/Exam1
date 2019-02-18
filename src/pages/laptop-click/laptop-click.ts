import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LaptopClickPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-laptop-click',
  templateUrl: 'laptop-click.html',
})
export class LaptopClickPage {
  laptop= {};
  imgs=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.laptop=this.navParams.get('laptop');
    if(this.laptop.ad.hasOwnProperty('images')){
      this.imgs=this.laptop.ad.images;
  }
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaptopClickPage');
  }

}
