import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  _router = inject(Router); //to programtica;ly navigate
  _formBuilder = inject(FormBuilder); // ti create model druven form
  
  errorMessage : string | undefined=undefined;//message when authenticate fails

  loginForm = this._formBuilder.group({id:[],password:[]})//form controls

  //user when user hits login button
  authenticate(){
    let login = this.loginForm.value;
    // this._router.navigate(['/success',login.id?.value])
    console.log("login.id")
    if(String(login.password)==='1234')
    {
      this._router.navigate(['success',login.id])
    }
    else{
      this.errorMessage = 'Invalid Credentials';
      this.loginForm.reset({});
    }
  }
}
