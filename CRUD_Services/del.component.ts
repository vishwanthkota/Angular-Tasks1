import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Dept, ProductModel } from './del.model';
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
  public empData: Dept[] = [];
  public emp: Dept;


url:string='http://localhost:3500/employee';

  

  public pname: string = '';
  public showError: boolean = false;
  public delta = ['Angular', 'Spring', 'AWS'];

  constructor(private delService:DelService,private http: HttpClient) {
    this.delproducts = new ProductModel();
    this.delproducts1 = new ProductModel();
    this.delpro = new ProductModel();
    this.delpro1 = new ProductModel();
    this.emp = new Dept();


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
this.getData();

  }

  getData()
  {

    this.delService.getData().subscribe((data:Dept[])=>{
      this.empData =data;
    });

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

  addDept(deptObj:Dept)
  {

    this.http.post<any>(this.url,  deptObj).subscribe( (response:any) =>{
     
      this.getData();  
    });
    this.emp= new Dept();

  }

  removeDept(dno:number)
  {
    this.http.delete<any>(this.url + "/" + dno).subscribe( (response:any) =>{
      
      this.getData();  
    });
  }


  selectDept(dno:Dept)
  {
    this.emp.deptno = dno.deptno;
    this.emp.eid = dno.eid;
    this.emp.name = dno.name;
    this.emp.dept = dno.dept;
    this.emp.sal = dno.sal;



  }

  updateDept(dobj:Dept,deptno:number)
  {
  
   
    this.http.put<any>(this.url + "/" +  deptno,  dobj).subscribe( (response:any) =>{
 
      this.getData();  
      this.emp= new Dept();
    });

  }

















}


// addDept_click()
// {
//   let deptObj:Dept = new Dept();
//   deptObj.deptno = this.deptno;
//   deptObj.dname = this.dname;
//   deptObj.loc = this.loc;

//   this.http.post<any>(this.url,  deptObj).subscribe( (response:any) =>{
//     console.log("New Dept details are added to server.");
//     alert("New Dept details are added to server.");
//     this.clearFields();
//     this.getDepts_click();  
//   });
// }

// removeDept(dno:number)
// {
//   this.http.delete<any>(this.url + "/" + dno).subscribe( (response:any) =>{
//     console.log("Requested Dept details are deleted from  server.");
//     alert("Requested Dept details are deleted from  server.");
//     this.getDepts_click();  
//   });
// }


// selectDept(dno:number)
// {
//   this.http.get<any>(this.url + "/" + dno).subscribe( (response:any) =>{

//     let deptObj = response;
//     this.deptno =   deptObj.deptno;
//     this.dname =   deptObj.dname;
//     this.loc 		=  deptObj.loc;
//     this.isDisabled = true;
//   });

// }

// updateDept()
// {
//   let deptObj:Dept = new Dept();
//   deptObj.deptno = this.deptno;
//   deptObj.dname = this.dname;
//   deptObj.loc = this.loc;

//   this.http.put<any>(this.url + "/" +  deptObj.deptno,  deptObj).subscribe( (response:any) =>{
//     console.log("Requested Dept details are updated to server.");
//     alert("Requested Dept details are updated to server.");
//     this.getDepts_click();  
//   });

// }
