import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import { Success } from './success/success';
import { Dashboard } from './dashboard/dashboard';
import { Search } from './search/search';
import { Add } from './add/add';
import { Settings } from './settings/settings';
import { authDemoGuard } from './auth-demo-guard';
import { Users } from './users/users';
// import { Box } from './box/box';
import { DetailBox } from './detail-box/detail-box';

const routes: Routes = [
  {path:'',component:Login},
  {path:'login',component:Login},
  {path:'register',component:Register},
  {path:'users',component:Users},
  {path:'detail-box',component:DetailBox},
  {path:'success/:id',component:Success,
    canActivate:[authDemoGuard],
    children:[
    {path:'',component:Dashboard},
    {path:'dashboard',component:Dashboard},
    {path:'search',component:Search},
    {path:'add',component:Add},
    {path:'settings',component:Settings},
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

