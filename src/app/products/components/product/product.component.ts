import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

  @Input() data:any = {};
  @Output() item = new EventEmitter()
  constructor(){ }
  ngOnInit(): void {

  }

  add(){
    this.item.emit(this.data)
  }

}
