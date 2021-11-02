import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges {

  @Input() siblingValue: string='';

  public products: ProductModel[] = [];
  public products1: ProductModel[] = [];
  

  constructor() { 

  }

  ngOnChanges() {
    if(this.siblingValue=='Name')
      {
        this.products.sort((a:ProductModel,b:ProductModel) => {
          return a.pname.localeCompare(b.pname)
       });
      }else if(this.siblingValue=='Price')
      {
        this.products.sort((a:ProductModel,b:ProductModel) => {
          return a.price-b.price;
       });
      }else{
        this.products.sort((a:ProductModel,b:ProductModel) => {
          return a.qty-b.qty;
       });
      }
    // this.products.filter(item => item[this.siblingValue] = this.)
      
   
}


  

  ngOnInit(): void {
    this.products.push({
      pname: "Printer",
      price: 1000,
      qty: 120,
      
    }, {
      pname: "Monitor",
      price: 2200,
      qty: 150,
    }, {
      pname: "KeyBoard",
      price: 400,
      qty: 170,
    }, {
      pname: "Mouse",
      price: 2500,
      qty: 180,
    });
  }

}


export class ProductModel{
  "pname" : string;
  "price" : number;
  "qty" : number;
}