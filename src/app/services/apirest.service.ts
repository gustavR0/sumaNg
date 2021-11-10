import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApirestService {
  private url = 'http://localhost:8080/suma/';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // tslint:disable-next-line:typedef
  sumar(numero1: number, numero2: number ){
    const data = {
      a: numero1,
      b: numero2
    };

    return this.http.post(`${(this.url)}`, data, this.httpOptions)
      .pipe(
        retry(1)
      );
  }
}
