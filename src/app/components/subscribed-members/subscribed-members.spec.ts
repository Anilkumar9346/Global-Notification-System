import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribedMembers } from './subscribed-members';

describe('SubscribedMembers', () => {
  let component: SubscribedMembers;
  let fixture: ComponentFixture<SubscribedMembers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscribedMembers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscribedMembers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
