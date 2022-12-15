import { Component, OnInit } from '@angular/core';
import { MyClimbs } from '../my-climbs.model';
import { MyClimbsService } from '../my-climbs.service';
import { Subscription } from 'rxjs'


@Component({
  selector: 'app-my-climbs-list',
  templateUrl: './my-climbs-list.component.html',
  styleUrls: ['./my-climbs-list.component.css']
})
export class myClimbsListComponent implements OnInit {
  myClimbs : MyClimbs[];
  subscription: Subscription;

  constructor(private myClimbsService: MyClimbsService) { }

  ngOnInit(){
    this.myClimbsService.getClimbs();
    this.myClimbsService.myClimbsChangedEvent.subscribe((myClimbs) => {
      this.myClimbs = myClimbs.slice();
    });
    this.subscription = this.myClimbsService.myClimbsChangedEvent.subscribe((myClimbs: MyClimbs[]) => {
      this.myClimbs = myClimbs
    })
  }


}
