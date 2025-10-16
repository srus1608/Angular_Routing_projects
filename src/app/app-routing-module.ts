import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import { Success } from './success/success';
import { Dashboard } from './dashboard/dashboard';
import { Search } from './search/search';
import { Add } from './add/add';
import { Settings } from './settings/settings';

const routes: Routes = [{path:'',component:Login},
  {path:'login',component:Login},
  {path:'register',component:Register},
    // :id - dyanmic id ...anything like success/1,success/2.....

  {path:'success/:id',component:Success,children:[
    {path:'',component:Dashboard},
    {path:'dashboard',component:Dashboard},
    {path:'search',component:Search},
    {path:'add',component:Add},
    {path:'settings',component:Settings},
    {path:'logout', component:Login}

  ]},
  
  // id - static id
  // {path:'success/id',component:Success ,children:[]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
