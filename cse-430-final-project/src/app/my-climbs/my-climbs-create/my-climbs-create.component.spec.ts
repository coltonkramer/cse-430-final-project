import { ComponentFixture, TestBed } from '@angular/core/testing';

import { myClimbsCreateComponent } from './my-climbs-create.component';

describe('myClimbsCreateComponent', () => {
  let component: myClimbsCreateComponent;
  let fixture: ComponentFixture<myClimbsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ myClimbsCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(myClimbsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
