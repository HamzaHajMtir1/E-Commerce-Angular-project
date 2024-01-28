import { Component, EventEmitter, Input, OnInit, Output, input } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent implements OnInit{
  @Input() title:string = "";
  @Input() data :any[] = [];
  @Output() selectedValue = new EventEmitter
  constructor(){ }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  detectChanges(event:any){
    this.selectedValue.emit(event)
  }
}
