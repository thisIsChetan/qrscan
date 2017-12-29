webpackJsonp([0],{

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessPageModule", function() { return ProcessPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__process__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(199);
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

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_barcode_barcode__ = __webpack_require__(198);
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
    }
    ProcessPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProcessPage');
        this.slides.lockSwipes(true);
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
            this.showBarcode();
        }
        else if (_currentIndex == 2) {
            this.view = "2.1";
        }
        else {
            this.view = "";
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
            _this.changeView('1.2');
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
            selector: 'page-process',template:/*ion-inline-start:"/Users/Avinash/BarcodeCialis/qrscan/src/pages/process/process.html"*/'<!--\n  Generated template for the ProcessPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-3 [ngClass]="{\'active-header\' : currentIndex == 0 }" >Product Source</ion-col>\n      <ion-col col-3 [ngClass]="{\'active-header\' : currentIndex == 1 }" >Code Scanner</ion-col>\n      <ion-col col-3 [ngClass]="{\'active-header\' : currentIndex == 2 }" >Validate Packaging</ion-col>\n      <ion-col col-3 [ngClass]="{\'active-header\' : currentIndex == 3 }" >Complete Validation</ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-toolbar *ngIf="view == \'2.3\'">\n      <button ion-button icon-only left clear (click)="changeView(\'2.1\')">\n          <ion-icon name="arrow-back"></ion-icon>\n        </button>\n    <ion-title>\n      <span *ngIf="packageType == \'5mg\'">Cialis 5mg Package Authentication Guide</span>\n      <span *ngIf="packageType == \'20mg\'">Cialis 20mg Package Authentication Guide</span>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n    <ion-slides (ionSlideDidChange)="slideChanged()">\n      <ion-slide >\n          <ion-list radio-group [(ngModel)]="purchaseFrom" >\n              <ion-list-header>\n                  Cialis purchased from :\n              </ion-list-header>\n            \n              <ion-item>\n                <ion-label text-wrap>Hospital</ion-label>\n                <ion-radio checked="true" value="HOSPITAL" item-left></ion-radio>\n              </ion-item>\n              <ion-item *ngIf="purchaseFrom == \'HOSPITAL\'">\n                <ion-label stacked>Please enter the name of the establishment (optional)</ion-label>\n                <ion-input type="text"></ion-input>\n              </ion-item>\n            \n              <ion-item>\n                <ion-label text-wrap>Pharmacy</ion-label>\n                <ion-radio value="PHARMACY" item-left></ion-radio>\n              </ion-item>\n              <ion-item *ngIf="purchaseFrom == \'PHARMACY\'">\n                <ion-label stacked>Please enter the name of the establishment (optional)</ion-label>\n                <ion-input type="text"></ion-input>\n              </ion-item>\n            \n              <ion-item>\n                <ion-label text-wrap>Other</ion-label>\n                <ion-radio value="OTHER" item-left></ion-radio>\n              </ion-item>\n              <ion-item *ngIf="purchaseFrom == \'OTHER\'">\n                <ion-label stacked>Please enter the name of the establishment (optional)</ion-label>\n                <ion-input type="text"></ion-input>\n              </ion-item>\n            </ion-list>\n        <button ion-button (click)="nextSlide()" round block [disabled]="purchaseFrom == \'\'">\n            Notice! <br>\n            Cialis is not distributed and sold in online shops. </button>\n      </ion-slide>\n    \n      <ion-slide >\n        <section *ngIf="view == \'1.1\'">\n            <h2>Slide 2</h2>\n            <button ion-button (click)="changeView(\'1.2\')"></button>\n        </section>        \n        <section *ngIf="view == \'1.2\'">\n            <alert-view [text]="\'One moment…<br>System Validation In Progress…\'" [buttonText]="\'ok\'" (buttonClick)="showBarcodeRes()"></alert-view>\n        </section>\n        <section *ngIf="view == \'1.3\'">\n            <alert-view [text]="resText" [buttonText]="\'OK\'" (buttonClick)="nextSlide()"></alert-view>\n        </section>\n      </ion-slide>\n    \n      <ion-slide >\n        <section *ngIf="view == \'2.1\'">\n            <ion-list radio-group [(ngModel)]="packageType" >\n                <ion-list-header>\n                    Choose the type of Cialis packaging for further validation:\n                </ion-list-header>\n                <ion-item>\n                  <ion-label text-wrap>Cialis 5mg</ion-label>\n                  <ion-radio value="5mg" item-left></ion-radio>\n                </ion-item>            \n                <ion-item>\n                  <ion-label text-wrap>Cialis 20mg</ion-label>\n                  <ion-radio value="20mg" item-left></ion-radio>\n                </ion-item>\n              </ion-list>\n            <button ion-button (click)="changeView(\'2.2\')"> Next </button>\n        </section>\n        <section *ngIf="view == \'2.2\'">\n            <alert-view [text]="\'Please follow the product validation image guide presented to verify the packaging.\'" [buttonText]="\'OK\'" (buttonClick)="changeView(\'2.3\')"></alert-view>\n        </section>\n        <section *ngIf="view == \'2.3\'">\n            <img  *ngIf="packageType == \'5mg\'" src="assets/imgs/pill5.png">\n            <img  *ngIf="packageType == \'20mg\'" src="assets/imgs/pill20.png">\n            <button ion-button (click)="changeView(\'2.4\')" round block >Notice! Cialis do not sell nor distribute online.</button>\n        </section>\n        <section *ngIf="view == \'2.4\'">\n            <ion-list radio-group [(ngModel)]="verificationResult" >\n                <ion-list-header>\n                    Package verification result: \n                </ion-list-header>\n                <ion-item>\n                  <ion-label text-wrap>All checkpoint passed</ion-label>\n                  <ion-radio value="ALL" item-left></ion-radio>\n                </ion-item>            \n                <ion-item>\n                  <ion-label text-wrap>Some didn’t match correctly </ion-label>\n                  <ion-radio value="SOME" item-left></ion-radio>\n                </ion-item>\n                <ion-item>\n                    <ion-label text-wrap>Not sure if the package validation matches the guide </ion-label>\n                    <ion-radio value="NOT_SURE" item-left></ion-radio>\n                  </ion-item>\n              </ion-list>\n            <button ion-button (click)="changeView(\'2.5\')"> Next </button>\n        </section>\n        <section *ngIf="view == \'2.5\'">\n            <alert-view [text]="\'Authentication Passed.!<br>Product is confirmed to be distributed by Lilly Taiwan.\'" [buttonText]="\'OK\'" (buttonClick)="nextSlide()"></alert-view>\n        </section>\n      </ion-slide>\n\n      <ion-slide >\n          <alert-view [text]="\'Validation details send for record keeping. \'" [buttonText]="\'Validate next product\'" (buttonClick)="goToSlide(0)"></alert-view>\n      </ion-slide>\n    \n    </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Users/Avinash/BarcodeCialis/qrscan/src/pages/process/process.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_barcode_barcode__["a" /* BarcodeProvider */]])
    ], ProcessPage);
    return ProcessPage;
}());

//# sourceMappingURL=process.js.map

/***/ })

});
//# sourceMappingURL=0.js.map