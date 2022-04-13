import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.scss'],
  providers: [],
})
export class MyCardComponent implements OnInit {
  @Input() title: string = '';
  owner: string = 'Tosin sdssd';

  // age: number;

  // users: number[]

  // users2: Array<number>

  constructor() {}

  ngOnInit(): void {}
}
