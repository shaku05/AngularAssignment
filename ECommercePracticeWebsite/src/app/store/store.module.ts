import { NgModule } from '@angular/core';
import { StoreComponent } from './store.component';
import { BrowserModule } from '@angular/platform-browser';
import { ModelModule } from '../model/model.module';
import { cartSummaryComponent } from './cartSummary.component';
import { CartDetail } from './cartDetail.component';
import { CouponDetail } from './CouponDetail.component';
import { RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [BrowserModule, ModelModule, RouterModule, FormsModule ],
  declarations: [StoreComponent, cartSummaryComponent, CartDetail, CouponDetail, CheckoutComponent],      //register and launch
  exports: [StoreComponent,CartDetail, CouponDetail, CheckoutComponent],     //sharing component across angular modules
})
export class StoreModule { }
