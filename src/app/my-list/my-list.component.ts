import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss'],
})
export class MyListComponent implements OnInit {
  names: string[] = ['Felix', 'Blessing', 'Edafe', 'Tosin'];
  constructor() {}

  ngOnInit(): void {}
}
