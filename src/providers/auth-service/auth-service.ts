import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthServiceProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
let apiUrl='https://buit-ibu-tw-cialis-id-dev.herokuapp.com/api/app_authentication/';

@Injectable()
export class AuthServiceProvider {
  
  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }

  isValid(credentials){
    return new Promise((resolve,reject) => {
      // let headers= new Headers();
      // headers.append('Content-Type', 'application/json');
      // headers.append("Accept", 'application/json');
      // headers.append('Access-Control-Allow-Origin', '*');

      let headers = {
        'Content-Type': 'application/json'
    };

      let data = JSON.stringify({
        app_authentication_code: credentials
      });

      this.http.post(apiUrl, data)
      //this.http.post(apiUrl+credentials,JSON.stringify(credentials),{ headers: headers })
      .subscribe(res => {
        console.log(res.json());
        resolve(res.json());
        
      }, (err) => {
        console.log(err);
        reject(err);

      }
    )
    });
  }


}
