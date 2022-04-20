import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../models/product.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  @Input() products: IProduct[] = [];
  constructor() {}

  ngOnInit(): void {}
}
