import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DelComponent } from './del/del.component';
import { FormsComponent } from './forms/forms.component';
import { LoginComponent } from './login/login.component';
import { ParentComponent } from './parent/parent.component';
import {  RegistrationComponent } from './registration/registration.component';
import { RouterComponentComponent } from './router-component/router-component.component';

const routes: Routes = [
  {
    path:'login',component:LoginComponent,
  },
  {
    path:'del',component:DelComponent,
  },
  {
    path:'dashboard',component:DashboardComponent,
  },
  {
    path:'parent',component:ParentComponent,
  },
  {
    path:'registration',component:RegistrationComponent,
  },
  {path:'forms',component:FormsComponent},
  {path:'routComponent/:deptno',component:RouterComponentComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
