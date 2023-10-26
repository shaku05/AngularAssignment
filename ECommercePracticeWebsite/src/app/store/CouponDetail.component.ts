import { Cart } from './../model/cart.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'coupon-detail',
  templateUrl: 'couponDetail.component.html',
  styleUrls: ["couponDetail.component.css"],
})

export class CouponDetail implements OnInit {
  Cart: any;
  constructor(private router : Router) { }

  ngOnInit() { }

  couponapplied() {
    console.log("added")
    this.router.navigateByUrl("/cart");
}
}
