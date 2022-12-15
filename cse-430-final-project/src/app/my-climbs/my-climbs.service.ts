import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyClimbs } from './my-climbs.model';
import { map, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyClimbsService {
  public myClimbs: any;
  myClimbsChangedEvent = new Subject<MyClimbs[]>();

  constructor(private http: HttpClient) {
    this.getClimbs()
  }

  getClimbs() : void{
    this.http
      .get('http://localhost:3000/climbs')
      .subscribe((myClimbData) => {
        this.myClimbs = myClimbData;
        console.log(this.myClimbs)
      });
  }
  
}
