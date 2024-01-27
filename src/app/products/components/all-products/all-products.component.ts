import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { error, timeStamp } from 'console';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent implements OnInit{
[x: string]: any;
  
  products:any[] = [];
  categories:any[] = []
image: any;
description: any;
  constructor(private service:ProductsService) { }
  
  ngOnInit(): void {
    this.getProducts()
    this.getCategories()
  }

  getProducts(){
    this.service.getAllProducts().subscribe((res:any) => {
      this.products = res
      console.log(res)
    } , error => {
      alert('Error')
    })
  }

  getCategories(){
    this.service.getAllCategories().subscribe((catego:any) => {
      this.categories = catego
      console.log(catego)
    }, error => {
      alert('Error')
    })
  }

  filterCategory(event:any){
    let value = event.target.value;
    if (value =="all"){
      this.getProducts()
    }else{
      this.getProductsCategory(value)
    }
  }

  getProductsCategory(keyword:string){
    this.service.getProductsByCategories(keyword).subscribe((res:any) => {
      this.products = res
      console.log(res)
    }, error => {
      alert('Error')
    })
  }
}
