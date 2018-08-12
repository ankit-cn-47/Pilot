import { MyOrdersComponent } from './../my-orders/my-orders.component';
import { AdminOrdersComponent } from './../admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './../admin/admin-products/admin-products.component';
import { LoginComponent } from './../login/login.component';
import { OrderSuccessComponent } from './../order-success/order-success.component';
import { CheckOutComponent } from './../check-out/check-out.component';
import { ShoppingCartComponent } from './../shopping-cart/shopping-cart.component';
import { ProductsComponent } from './../products/products.component';
import { HomeComponent } from './../home/home.component';
import { MainNavComponent } from './../main-nav/main-nav.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'check-out', component: CheckOutComponent},
  {path: 'my-orders', component: MyOrdersComponent},
  {path: 'order-success', component: OrderSuccessComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin/products', component: AdminProductsComponent},
  {path: 'admin/orders', component: AdminOrdersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class RoutingModule { }
