import { Component, OnInit } from '@angular/core';
import { Cart } from '../model/cart.model';

@Component({
  selector: 'cart-detail',
  templateUrl: 'cartDetail.component.html'
})

export class CartDetail implements OnInit {
  isDiscountApplied: boolean = false;
  constructor(public cart : Cart) { }

  ngOnInit() { }
  getDiscountedTotal(): number {
    return this.cart.getDiscountedvalueapplied();
  }

  getTotal(): number {
    return this.cart.calculateTotalofproducts();
  }

  getNetTotal(): number {
    return this.cart.calculateTotalWithDiscount();
  }

  // getNetTotal(): number {
  //   // Calculate the net total after applying the discount
  //   return this.cart.calculateTotalWithDiscount();
  // }
}
