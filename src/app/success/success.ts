import { Component, OnInit,inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-success',
  standalone: false,
  templateUrl: './success.html',
  styleUrl: './success.css'
})
export class Success implements OnInit {
  _activatedRoute = inject(ActivatedRoute);
  id : number | undefined= undefined;

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe({
      next : value => this.id = Number(value.get('id')),
      error : err =>console.log('error: ',err),
      
      

    })
  }


}
