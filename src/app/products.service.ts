import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IProduct } from './models/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  API_URL: string = 'http://localhost:3000/products';

  constructor(private httpService: HttpClient) {}

  getProducts(): Observable<any> {
    return this.httpService.get(this.API_URL);
  }

  getProductsById() {}

  addProduct() {}

  updateProduct() {}
}
