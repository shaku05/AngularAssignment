import { HttpClientModule } from '@angular/common/http';
import { ProductRepository } from './product.repository';
import { StaticDataSource } from './static.datasource';
import { NgModule } from '@angular/core';
import { RestDataSource } from './rest.datasource';
import { Cart } from './cart.model';
import { OrderRepository } from './order.repository';
import { Order } from './order.model';

@NgModule({
  imports:[HttpClientModule],
  providers: [StaticDataSource,ProductRepository, Cart, Order, OrderRepository,
    { provide: StaticDataSource, useClass: RestDataSource },
    RestDataSource]
})
export class ModelModule { } // exclusive services

