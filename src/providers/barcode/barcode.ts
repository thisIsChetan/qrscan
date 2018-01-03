
import { Injectable } from '@angular/core';


/*
  Generated class for the BarcodeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BarcodeProvider {

  constructor() {
    console.log('Hello BarcodeProvider Provider');
  }

  showAlert(){
    alert("Code is scanning");
  }
  // scan(){
  //   return new Promise((resolve, reject)=>{
  //     let options: BarcodeScannerOptions = {};
  //     options.formats = "DATA_MATRIX"
  //     this.barcodeScanner.scan(options).then((barcodeData) => {
  //       console.log(barcodeData);
  //       alert(barcodeData);
  //       resolve(true);
  //      }, (err) => {
  //       console.log(err);
  //       reject(err);
  //      });
  //   })
  // }


}
