import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class User {
    id : number | undefined;
    name : string | undefined;
    password: string | undefined;
    phone : number | undefined;

}
