import { Product } from './model/product';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private storeURL = 'http://localhost:8080/store/v1/products';  // URL to web api

  constructor(private http: HttpClient) { }


  getProducts() {
    return this.http.get<Product[]>(this.storeURL).pipe(catchError(this.handleError));
  }


  private handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return throwError(err.message || err);
  }

}
