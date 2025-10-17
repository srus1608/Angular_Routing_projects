import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-detail-box',
  standalone: false,
  templateUrl: './detail-box.html',
  styleUrl: './detail-box.css'
})
export class DetailBox {
 form: FormGroup;
  user: any;
  message: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      id: ['']
    });
  }

  getUser() {
    const id = this.form.value.id;
    this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`).subscribe({
      next: (data) => {
        this.user = data;
        this.message = '';
      },
      error: () => {
        this.user = null;
        this.message = 'User with this ID not found!';
      }
    });
  }
}

