import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-mycard',
  templateUrl: './mycard.component.html',
  styleUrls: ['./mycard.component.scss'],
})
export class MycardComponent implements OnInit {
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() amount: string = '';
  @Input() amounts: string = '';
  @Input() percentage: string = '';
  @Input() rate: string = '';
  @Input() rating: string = '';

  constructor() {}

  ngOnInit(): void {}
}
