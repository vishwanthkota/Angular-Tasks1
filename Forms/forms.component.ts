import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Dept } from '../del/del.model';
import { FormsService } from './forms.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor(private formsService:FormsService,private router:ActivatedRoute) { 
  }
  showData:boolean=false;

  data:any;
  detailsForm = new FormGroup({
    firstname: new FormControl('',Validators.required),
    lastname: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    tandc: new FormControl(false,Validators.requiredTrue),

  }) 
  public  firstName:string   = "";
	public  lastName:string   = "";
	public  city:string   = "";
	public  email:string   = "";
	public  pincode:string   = "";



  ngOnInit(): void {
 
  }
  public submitForm():void
  {
    this.data = this.detailsForm.value;
      this.showData=true
  }

}
