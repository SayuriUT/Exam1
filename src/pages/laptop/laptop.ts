import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { LaptopClickPage } from '../laptop-click/laptop-click';

/**
 * Generated class for the LaptopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-laptop',
  templateUrl: 'laptop.html',
})
export class LaptopPage {
  laptops = [];
  laptop = LaptopClickPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.http.get('/v1/klfst?&category=5020&offset=1&lim=29&lang=es')
    .subscribe(data => {
      if(data.hasOwnProperty('list_ads')){
        this.laptops = data['list_ads'];
      }
      // console.log(JSON.stringify(data));
    },
    error =>
    {
      console.log(JSON.stringify(error));
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaptopPage');
  }

  verLaptop(laptop){
    this.navCtrl.push(this.laptop,{laptop: laptop});
  }

}
