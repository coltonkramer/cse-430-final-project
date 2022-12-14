import { Component, Input, OnInit } from '@angular/core';
import { MyClimbs } from '../../my-climbs.model';


@Component({
  selector: 'app-my-climbs-item',
  templateUrl: './my-climbs-item.component.html',
  styleUrls: ['./my-climbs-item.component.css']
})
export class myClimbsItemComponent implements OnInit {
  @Input() myClimbs: MyClimbs;

  constructor() { }

  ngOnInit(): void {
  }

}
