import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product.interface';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private prodService: ProductsService) {}
  products: IProduct[] = [];

  ngOnInit(): void {
    this.prodService.getProducts().subscribe(
      (response) => {
        this.products = response;
      },
      (error) => {
        alert('An error occured');
      },

      () => {}
    );
  }
}
