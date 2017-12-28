import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
let apiUrl='https://reqres.in/api/users';
@Injectable()
export class AuthServiceProvider {
  


  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }

  isValid(credentials){
    return new Promise((resolve,reject) => {
      let headers= new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post(apiUrl,JSON.stringify(credentials),{ headers: headers })
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        reject(err);
      }
    )
    });
  }

}