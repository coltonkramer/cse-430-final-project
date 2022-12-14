import { Component, OnInit, Input } from '@angular/core';
import { MyClimbs } from '../my-climbs.model';
import { MyClimbsService } from '../my-climbs.service';

import { Subscription } from 'rxjs'


@Component({
  selector: 'app-my-climbs-list',
  templateUrl: './my-climbs-list.component.html',
  styleUrls: ['./my-climbs-list.component.css']
})
export class myClimbsListComponent implements OnInit {
  private subscription!: Subscription;

  @Input() myClimbs: MyClimbs;
  constructor(private myClimbsService: MyClimbsService) { }

  ngOnInit(): void {
    this.subscription = this.myClimbsService.contactChangedEvent
    .subscribe((contacts: any) => {
      this.myClimbs = this.myClimbs;
    });
  }


}
