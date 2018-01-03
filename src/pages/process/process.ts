import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { BarcodeProvider } from '../../providers/barcode/barcode'
/**
 * Generated class for the ProcessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-process',
  templateUrl: 'process.html',
})
export class ProcessPage {
  @ViewChild(Slides) slides: Slides;
  currentIndex:number = 0;
  purchaseFrom:string = '';
  isImage: boolean = false;  
  view:string;
  radioValue:string="hospital";
  clickUrl="assets/imgs/redio-button-click.png";
  unClickUrl="assets/imgs/redio-button-unclick.png";
  images={src:["assets/imgs/01-Step.png","assets/imgs/02-Step.png","assets/imgs/03-Step.png","assets/imgs/04-Step.png"]};
  
  constructor(public navCtrl: NavController,
             public navParams: NavParams,
              private barcode: BarcodeProvider) {
  console.log("images"+this.images.src[this.currentIndex]);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProcessPage');
    this.slides.lockSwipes(true);
  }

  radioBtn(value){
    this.radioValue=value;
  }
  goToSlide(slide) {
    this.slides.lockSwipes(false);
    this.slides.slideTo(slide, 500);
    this.slides.lockSwipes(true);
  }
  nextSlide(){
    this.slides.lockSwipes(false);
    this.slides.slideNext(500, true);
    this.slides.lockSwipes(true);
    let _currentIndex = this.slides.getActiveIndex();
    if(_currentIndex == 1){
      this.view = '1.1';
      // this.barcode.showAlert();
      this.showBarcode();
    }else if(_currentIndex == 2){
      this.view = "2.1";
    }else{
      this.view = "";
    }
    
  }
  slideChanged() {
    this.currentIndex = this.slides.getActiveIndex();
  }

  changeView(view){
    this.view = view;
  }

  buttonClick(){
    alert("dsg");
  }
  //Slide 1
  resText:string;
  showBarcode(){
    this.barcode.scan().then((res)=>{
      this.changeView('1.2')
    })
  }
  showBarcodeRes(){
    this.view = "1.3";
    this.resText = "Code Validated!<br>Proceed to next step…"
  }

}
