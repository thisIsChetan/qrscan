
import { Injectable } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

/*
  Generated class for the BarcodeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BarcodeProvider {

  constructor(private barcodeScanner: BarcodeScanner) {
    console.log('Hello BarcodeProvider Provider');
  }

  scan(){
    return new Promise((resolve, reject)=>{
      let options: BarcodeScannerOptions = {};
      options.formats = "DATA_MATRIX"
      this.barcodeScanner.scan(options).then((barcodeData) => {
        console.log(barcodeData);
        resolve(true);
       }, (err) => {
        console.log(err);
        reject(err);
       });
    })
  }


}
