import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Login } from './login/login';
import { Register } from './register/register';
import { Success } from './success/success';
import { Add } from './add/add';
import { Search } from './search/search';
import { Settings } from './settings/settings';
import { Dashboard } from './dashboard/dashboard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { Users } from './users/users';
// import { TextBox } from './box/box';
import { DetailBox } from './detail-box/detail-box';
import { UserItem } from './user-item/user-item';
@NgModule({
  declarations: [
    App,
    Login,
    Register,
    Success,
    Add,
    Search,
    Settings,
    Dashboard,
    Users,
    // Box,
    DetailBox,
    UserItem,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule,
    
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }