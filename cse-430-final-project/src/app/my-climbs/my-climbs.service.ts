import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyClimbs } from './my-climbs.model';

@Injectable({
  providedIn: 'root'
})
export class MyClimbsService {
  contactChangedEvent: any;

  constructor(private http: HttpClient){

  }
  getClimbs(): MyClimbs[] {
      this.http.get('http://localhost:3000/myClimbs')
      .subscribe(() => {
      })
      return null
  }

}
