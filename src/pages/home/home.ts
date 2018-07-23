import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  respuesta: string = "";
  random: number = null;
  style: any = null;

  constructor(public navCtrl: NavController) {

  }

  yesNo() {
   let color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
   this.random = null;
   this.random = (Math.random()>0.5)? 1 : 0;
   this.style = {"color": color};

   if(this.random == 0) {
    this.respuesta = 'NO'
   } else {
     this.respuesta = 'YES'
   }
  }
}
