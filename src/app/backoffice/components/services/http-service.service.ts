import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private httpClient: HttpClient) {
  }

  url = 'http://127.0.0.1:8080/cluster-poc/getData';

  loginApi = 'https://staging-uat1.loanframe.com/back-office/api/login';

  getData(): Observable<any> {
    return this.httpClient.get(this.url, {responseType: 'text'}).pipe(
      tap((data) => {
        console.log('next', data);
      }, (error) => {
        console.log('error', error);
      }, () => {
        console.log('complete');
      })
    );
  }

  login(postData, options): Observable<any> {
    return this.httpClient.post(this.loginApi, postData, options).pipe(
      tap((data) => {
        console.log('next', data);
      }, (error) => {
        console.log('error', error);
      }, () => {
        console.log('complete');
      })
    );
  }
}
