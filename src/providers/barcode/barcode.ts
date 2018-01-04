import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { Injectable } from '@angular/core';


/*
  Generated class for the BarcodeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BarcodeProvider {

  productData={
    "0110614141543219103456789213456789012":{
      "productName":"glimepiride",
      "Dose":"5gm"
    }
  };
  constructor(private barcodeScanner: BarcodeScanner) {
    console.log('Hello BarcodeProvider Provider');
  }

  showAlert(){
    alert("Code is scanning");
  }
  scan(){
    return new Promise((resolve, reject)=>{
      let options: BarcodeScannerOptions = {};
      options.formats = "DATA_MATRIX"
      this.barcodeScanner.scan(options).then((barcodeData) => {
        console.log(barcodeData.text);
        if(this.productData[barcodeData.text]){
          resolve(true);
        }
        else{
          resolve(false);
        }
      //  resolve(true);
      resolve(barcodeData.text);
       }, (err) => {
        console.log(err);
        reject(err);
       });
    })
  }


}
