import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dept } from '../del/del.model';
import { FormsService } from '../forms/forms.service';

@Component({
  selector: 'app-router-component',
  templateUrl: './router-component.component.html',
  styleUrls: ['./router-component.component.css']
})
export class RouterComponentComponent implements OnInit {

  empData : Dept;
  
  constructor(private formsService:FormsService,private router:ActivatedRoute) { 
    this.empData = new Dept();

  }

  ngOnInit(): void {
    let d= this.router.snapshot.params["deptno"];
    this.formsService.getDataByDept(d).subscribe(data=>{
      this.empData = data;
      console.log(this.empData.eid);
      
    })
  }

}
