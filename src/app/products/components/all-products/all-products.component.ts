import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { error } from 'console';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent implements OnInit{
[x: string]: any;
  
  products:any[] = []
image: any;
description: any;
  constructor(private service:ProductsService) { }
  
  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.service.getAllProducts().subscribe((res:any) => {
      this.products = res
    } , error => {
      alert('Error')
    })
  }

}
