webpackJsonp([0],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessPageModule", function() { return ProcessPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__process__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProcessPageModule = (function () {
    function ProcessPageModule() {
    }
    ProcessPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__process__["a" /* ProcessPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__process__["a" /* ProcessPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], ProcessPageModule);
    return ProcessPageModule;
}());

//# sourceMappingURL=process.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_barcode_barcode__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ProcessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProcessPage = (function () {
    function ProcessPage(navCtrl, navParams, barcode) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.barcode = barcode;
        this.currentIndex = 0;
        this.purchaseFrom = '';
        this.isImage = false;
        this.clickUrl = "assets/imgs/redio-button-unclick.png";
        this.unClickUrl = "assets/imgs/redio-button-click.png";
        this.images = {
            src: ["assets/imgs/01-Step.png", "assets/imgs/02-Step.png",
                "assets/imgs/03-Step.png", "assets/imgs/04-Step.png"]
        };
        console.log("images" + this.images.src[this.currentIndex]);
        this.radioValue = "hospital";
        this.packageType = "5mg";
        this.verificationResult = "All";
    }
    ProcessPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProcessPage');
        this.slides.lockSwipes(true);
    };
    ProcessPage.prototype.radioBtn = function (value) {
        this.radioValue = value;
        this.packageType = value;
        this.verificationResult = value;
    };
    ProcessPage.prototype.goToSlide = function (slide) {
        this.slides.lockSwipes(false);
        this.slides.slideTo(slide, 500);
        this.slides.lockSwipes(true);
    };
    ProcessPage.prototype.nextSlide = function () {
        this.slides.lockSwipes(false);
        this.slides.slideNext(500, true);
        this.slides.lockSwipes(true);
        var _currentIndex = this.slides.getActiveIndex();
        if (_currentIndex == 1) {
            this.view = '1.1';
            //this.barcode.showAlert();
            this.showBarcode();
        }
        else if (_currentIndex == 2) {
            this.view = "2.1";
        }
        else {
            this.currentIndex = 0;
        }
    };
    ProcessPage.prototype.slideChanged = function () {
        this.currentIndex = this.slides.getActiveIndex();
    };
    ProcessPage.prototype.changeView = function (view) {
        this.view = view;
    };
    ProcessPage.prototype.buttonClick = function () {
        alert("dsg");
    };
    ProcessPage.prototype.showBarcode = function () {
        var _this = this;
        this.barcode.scan().then(function (res) {
            if (res) {
                _this.changeView('1.2');
            }
            else {
                _this.slides.slideTo(0, 500);
            }
        });
    };
    ProcessPage.prototype.showBarcodeRes = function () {
        this.view = "1.3";
        this.resText = "Code Validated!<br>Proceed to next step…";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Slides */])
    ], ProcessPage.prototype, "slides", void 0);
    ProcessPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-process',template:/*ion-inline-start:"/Users/avinash/ionic/New/qrscan/src/pages/process/process.html"*/'<!--\n  Generated template for the ProcessPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-grid>\n    <ion-row>\n      <div class="progessImg">\n        <img [src]="this.images.src[currentIndex]">\n      </div>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-3 class="index-4" [ngClass]="{\'active-header\' : currentIndex == 0 }">\n        Product Source\n      </ion-col>\n      <ion-col col-3 class="index-3" [ngClass]="{\'active-header\' : currentIndex == 1 }">Code Scanner</ion-col>\n      <ion-col col-3 class="index-2" [ngClass]="{\'active-header\' : currentIndex == 2 }">Validate Packaging</ion-col>\n      <ion-col col-3 class="index-1" [ngClass]="{\'active-header\' : currentIndex == 3 }">Complete Validation</ion-col>\n    </ion-row>\n  </ion-grid>\n  <!-- <div class="shodowImg">\n    <img src="assets/imgs/step-shodow.png">\n  </div> -->\n  <ion-toolbar *ngIf="view == \'2.3\'">\n    <button ion-button icon-only left clear (click)="changeView(\'2.1\')">\n      <ion-icon name="arrow-back"></ion-icon>\n    </button>\n    <ion-title>\n      <span *ngIf="packageType == \'5mg\'">Cialis 5mg Package Authentication Guide</span>\n      <span *ngIf="packageType == \'20mg\'">Cialis 20mg Package Authentication Guide</span>\n    </ion-title>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-slides (ionSlideDidChange)="slideChanged()">\n    <ion-slide>\n      <ion-list radio-group [(ngModel)]="purchaseFrom" no-lines>\n        <ion-list-header>\n          Cialis purchased from :\n        </ion-list-header>\n        <ion-grid>\n          <ion-row>\n            <ion-col col-1>\n              <div class="btnRadio">\n                <img [src]="clickUrl" *ngIf="radioValue !== \'hospital\'" (click)="radioBtn(\'hospital\')">\n                <img [src]="unClickUrl" *ngIf="radioValue == \'hospital\'" (click)="radioBtn(\'hospital\')">\n              </div>\n            </ion-col>\n            <ion-col col-4>\n              <span (click)="radioBtn(\'hospital\')">Hospital</span>\n            </ion-col>\n            <ion-col class="inputCol">\n              <ion-input type="text" placeholder="Please enter the name of the establishment (optional)"></ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-1>\n              <div class="btnRadio">\n                <img [src]="clickUrl" *ngIf="radioValue !== \'pharmacy\'" (click)="radioBtn(\'pharmacy\')">\n                <img [src]="unClickUrl" *ngIf="radioValue == \'pharmacy\'" (click)="radioBtn(\'pharmacy\')">\n              </div>\n            </ion-col>\n            <ion-col col-4>\n              <span (click)="radioBtn(\'pharmacy\')">Pharmacy</span>\n            </ion-col>\n            <ion-col class="inputCol">\n              <ion-input type="text" placeholder="Please enter the name of the establishment (optional)"></ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-1>\n              <div class="btnRadio">\n                <img [src]="clickUrl" *ngIf="radioValue !== \'other\'" (click)="radioBtn(\'other\')">\n                <img [src]="unClickUrl" *ngIf="radioValue == \'other\'" (click)="radioBtn(\'other\')">\n              </div>\n            </ion-col>\n            <ion-col col-4>\n              <span (click)="radioBtn(\'other\')">Other</span>\n            </ion-col>\n            <ion-col class="inputCol">\n              <ion-input type="text" placeholder="Please enter the name of the establishment (optional)"></ion-input>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-list>\n\n      <div class="noticeBtn" tappable (click)="nextSlide()">\n        <p> Notice!\n          <br> Cialis is not distributed and sold in online shops.\n        </p>\n        <img src="assets/imgs/button-bg.png">\n      </div>\n    </ion-slide>\n\n    <ion-slide>\n      <section *ngIf="view == \'1.1\'">\n        <h2>Slide 2</h2>\n        <button ion-button (click)="changeView(\'1.2\')"></button>\n      </section>\n      <section *ngIf="view == \'1.2\'">\n        <alert-view [text]="\'One moment…<br>System Validation In Progress…\'" [buttonText]="\'ok\'" (buttonClick)="showBarcodeRes()"></alert-view>\n      </section>\n      <section *ngIf="view == \'1.3\'">\n        <alert-view [text]="resText" [buttonText]="\'OK\'" (buttonClick)="nextSlide()"></alert-view>\n      </section>\n    </ion-slide>\n\n    <ion-slide>\n      <section *ngIf="view == \'2.1\'">\n        <ion-list radio-group [(ngModel)]="packageType" no-lines>\n          <ion-list-header>\n            Choose the type of Cialis packaging for further validation:\n          </ion-list-header>\n\n          <ion-grid>\n            <ion-row>\n              <ion-col col-1>\n                <div class="btnRadio">\n                  <img [src]="clickUrl" *ngIf="packageType !== \'5mg\'" (click)="radioBtn(\'5mg\')">\n                  <img [src]="unClickUrl" *ngIf="packageType == \'5mg\'" (click)="radioBtn(\'5mg\')">\n                </div>\n              </ion-col>\n              <ion-col col-5>\n                <span (click)="radioBtn(\'5mg\')">Cialis 5mg</span>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-1>\n                <div class="btnRadio">\n                  <img [src]="clickUrl" *ngIf="packageType !== \'20mg\'" (click)="radioBtn(\'20mg\')">\n                  <img [src]="unClickUrl" *ngIf="packageType == \'20mg\'" (click)="radioBtn(\'20mg\')">\n                </div>\n              </ion-col>\n              <ion-col col-5>\n                <span (click)="radioBtn(\'20mg\')">Cialis 20mg</span>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-list>\n        <button ion-button (click)="changeView(\'2.2\')"> Next </button>\n      </section>\n\n      <section *ngIf="view == \'2.2\'">\n        <alert-view [text]="\'Please follow the product validation image guide presented to verify the packaging.\'" [buttonText]="\'OK\'"\n          (buttonClick)="changeView(\'2.3\')"></alert-view>\n      </section>\n\n      <section *ngIf="view == \'2.3\'">\n          <img *ngIf="packageType == \'5mg\'" src="assets/imgs/pill5.png" >\n          <img *ngIf="packageType == \'20mg\'" src="assets/imgs/pill20.png" >\n        <div class="noticeBtn" tappable (click)="changeView(\'2.4\')">\n          <p> Notice!\n            <br> Cialis is not distributed and sold in online shops.\n          </p>\n          <img src="assets/imgs/button-bg.png">\n        </div>\n      </section>\n      <section *ngIf="view == \'2.4\'">\n        <ion-list radio-group [(ngModel)]="verificationResult" no-lines>\n          <ion-list-header>\n            Package verification result:\n          </ion-list-header>\n\n          <ion-grid>\n            <ion-row>\n              <ion-col col-1>\n                <div class="btnRadio">\n                  <img [src]="clickUrl" *ngIf="verificationResult !== \'ALL\'" (click)="radioBtn(\'ALL\')">\n                  <img [src]="unClickUrl" *ngIf="verificationResult == \'ALL\'" (click)="radioBtn(\'ALL\')">\n                </div>\n              </ion-col>\n              <ion-col >\n                <span (click)="radioBtn(\'ALL\')">All checkpoint passed</span>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-1>\n                  <div class="btnRadio">\n                    <img [src]="clickUrl" *ngIf="verificationResult !== \'SOME\'" (click)="radioBtn(\'SOME\')">\n                    <img [src]="unClickUrl" *ngIf="verificationResult == \'SOME\'" (click)="radioBtn(\'SOME\')">\n                  </div>\n                </ion-col>\n                <ion-col >\n                  <span (click)="radioBtn(\'SOME\')">Some didn’t match correctly</span>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                  <ion-col col-1>\n                    <div class="btnRadio">\n                      <img [src]="clickUrl" *ngIf="verificationResult !== \'NOT_SURE\'" (click)="radioBtn(\'NOT_SURE\')">\n                      <img [src]="unClickUrl" *ngIf="verificationResult == \'NOT_SURE\'" (click)="radioBtn(\'NOT_SURE\')">\n                    </div>\n                  </ion-col>\n                  <ion-col >\n                    <span (click)="radioBtn(\'NOT_SURE\')">Some didn’t match correctly</span>\n                  </ion-col>\n                </ion-row>\n          </ion-grid>\n        </ion-list>\n        <button ion-button (click)="changeView(\'2.5\')"> Next </button>\n      </section>\n      <section *ngIf="view == \'2.5\'">\n        <alert-view [text]="\'Authentication Passed.!<br>Product is confirmed to be distributed by Lilly Taiwan.\'" [buttonText]="\'OK\'"\n          (buttonClick)="nextSlide()"></alert-view>\n      </section>\n    </ion-slide>\n\n    <ion-slide>\n      <alert-view [text]="\'Validation details send for record keeping. \'" [buttonText]="\'Validate next product\'" (buttonClick)="goToSlide(0)"></alert-view>\n    </ion-slide>\n\n  </ion-slides>\n\n  <div class="btnIcon" *ngIf="view == \'2.1\' || view == \'2.4\'">\n    <img src="assets/imgs/menu.png">\n  </div>\n</ion-content>\n\n<ion-footer no-border>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-3>\n        <img src="assets/imgs/lilly-logo.png">\n      </ion-col>\n      <ion-col col-7>\n        <span>\n          聯絡我們\n歡迎您寶貴的意見, 禮來公司關心您的健康。台北市復興北路365號11樓\n電話： (02)27152950\n        </span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>'/*ion-inline-end:"/Users/avinash/ionic/New/qrscan/src/pages/process/process.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_barcode_barcode__["a" /* BarcodeProvider */]])
    ], ProcessPage);
    return ProcessPage;
}());

//# sourceMappingURL=process.js.map

/***/ })

});
//# sourceMappingURL=0.js.map