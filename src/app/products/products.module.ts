import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';



@NgModule({
  declarations: [
    ProductsDetailsComponent,
    AllProductsComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }