import { Component, OnInit } from '@angular/core';
import { Cart } from '../model/cart.model';

@Component({
  selector: 'cart-summary',
  templateUrl: 'cartsummary.component.html'
})

export class cartSummaryComponent implements OnInit {
  constructor(public cart: Cart) { }

  ngOnInit() { }
}
