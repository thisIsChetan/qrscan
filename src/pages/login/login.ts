import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [AuthServiceProvider]
})
export class LoginPage {

  user: any;
  service:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authServiceProvider: AuthServiceProvider) {
    console.log(authServiceProvider.http);
    this.user = {
      pass: ''
    };
  this.service=authServiceProvider;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  navigateToProcess() {
    //this.navCtrl.push("ProcessPage");
   this.service.isValid(this.user.pass).then(data => {
     alert(data.status);
    if(data){
      if(data.status == "OK"){
       this.navCtrl.push("ProcessPage");
      }
      else{
        alert("Wrong Password");
      }
    }
  })
    
  }
}