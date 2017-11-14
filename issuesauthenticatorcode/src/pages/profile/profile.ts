import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})

export class ProfilePage {
  constructor(public navCtrl: NavController) {
  }

  onSave(){
    console.log(this.temperature);
    console.log(this.lighting);
    console.log(this.humidity);
  }
}
