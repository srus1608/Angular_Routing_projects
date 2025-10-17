import { Component, inject } from '@angular/core';
import { UserService } from '../user-service';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class Users {
  _service = inject(UserService);
  userArray : any = undefined;

  ngOnInit() : void{
    this._service.getUsers().subscribe({
      next: data => this.userArray=data,
      error : err=> alert(err)

    });
  }
}
