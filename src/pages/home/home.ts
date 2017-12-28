import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TermsAndConditionsPage } from '../terms-and-conditions/terms-and-conditions'
import { AuthServiceProvider } from '../../providers/auth-service/auth-service'
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userAuth = {
    pass:''
   };
   pageloading:any;
   data:any;
  constructor(public navCtrl: NavController
              ,public authService: AuthServiceProvider) {

  }

  logForm() {
  this.authService.isValid(this.userAuth).then((result) => {
    this.data=result;
    this.navCtrl.setRoot(TermsAndConditionsPage);
  }, (err) => {
    alert("not matching");
  }

)
   
  }

  navigateToProcess(){
    this.navCtrl.push("ProcessPage");
  }
}
