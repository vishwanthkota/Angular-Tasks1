import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dept, ProductModel } from './del.model';

@Injectable({
  providedIn: 'root'
})
export class DelService {
  url:string  = "http://localhost:3000/depts";
public pro = [{
  pname: "Printer",
  price: 2000,
  qty: 120,
}, {
  pname: "Monitor",
  price: 2200,
  qty: 150,
}, {
  pname: "KeyBoard",
  price: 2000,
  qty: 170,
}, {
  pname: "Mouse",
  price: 2500,
  qty: 180,
}];
  constructor( private  http:HttpClient) { }
  public getproducts() :ProductModel[]
  {
    return this.pro;
  }
  public updateProducts(p:any)
  {
    this.pro.forEach((element, index) => {
      if (element.pname == p.pname) {
        element.pname = p.pname;
        element.price = p.price;
        element.qty = p.qty;
      }
    });
    return this.pro;
  }
  public addProducts(p:any)
  {
    if(!this.pro.find( element => p.pname == element.pname))
    {
      this.pro.push(p);
    }
    return this.pro;
  }
  removeProduct(s: string) {
  
    this.pro.forEach((element, index) => {
      if (element.pname == s) {
        this.pro.splice(index, 1);
      }

    });
   return this.pro;

  }


    getData(): Observable<any[]> {
      return this.http.get<any[]>('http://localhost:3500/employee')
    }


}


