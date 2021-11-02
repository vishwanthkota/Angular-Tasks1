import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductModel } from './del.model';
import { DelService } from './del.service';

@Component({
  selector: 'app-del',
  templateUrl: './del.component.html',
  styleUrls: ['./del.component.css']
})
export class DelComponent implements OnInit {
  @ViewChild('ProductForm') ProductForm: any;
  public products: ProductModel[] = [];
  public showProducts: boolean = false;
  public add: boolean = false;
  public remove: boolean = false;
  public delproducts: ProductModel;
  public delproducts1: ProductModel;
  public delpro: ProductModel;
  public delpro1: ProductModel;
  public proServiceDta: ProductModel[] = [];


  

  public pname: string = '';
  public showError: boolean = false;
  public delta = ['Angular', 'Spring', 'AWS'];

  constructor(private delService:DelService) {
    this.delproducts = new ProductModel();
    this.delproducts1 = new ProductModel();
    this.delpro = new ProductModel();
    this.delpro1 = new ProductModel();

  }

  ngOnInit(): void {
    this.products.push({
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
    });

    this.proServiceDta = this.delService.getproducts();

  }


  showData() {
    if (!this.showProducts)
      this.showProducts = true;
    else
      this.showProducts = false;
  }
  showBox(box: string) {
    if (box == 'add')
      this.add = true;
    else
      this.remove = true;
  }
  addProduct(p: any) {
    // let find: boolean = false;
    // this.products.forEach((element, index) => {
    //   if (element.pname == p.pname) {
    //     find = true;
    //   }

    // });
    // if (!find) {
    //   this.products.push(p);

    // }
    if(!this.products.find( element => p.pname == element.pname))
    {
      this.products.push(p);
    }
   


    this.delproducts = new ProductModel();
  }
  update(p: any) {
    this.products.forEach((element, index) => {
      if (element.pname == p.pname) {
        element.pname = p.pname;
        element.price = p.price;
        element.qty = p.qty;
      }
    })
  }
  select(p: any) {
    this.delproducts = p;
    this.remove = true;
  }

  selectService(p: any) {
    this.delpro1 = p;
    this.remove = true;
  }

  removeProduct(s: string) {
    this.showError = false;
    let h: boolean = false;
    this.products.forEach((element, index) => {
      if (element.pname == s) {
        this.products.splice(index, 1);
        h = true;
      }

    });
    if (h == false) {
      this.showError = true;

    }

  }

  addProductService(p: any) {
    this.delService.addProducts(p);

  }
  
  removeProductService(s: string) {

    this.delService.removeProduct(s);

  }
  UpdateProductService(s: string) {

    this.delService.removeProduct(s);

  }



}
