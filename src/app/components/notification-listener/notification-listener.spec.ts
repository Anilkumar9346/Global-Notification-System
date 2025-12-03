import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationListener } from './notification-listener';

describe('NotificationListener', () => {
  let component: NotificationListener;
  let fixture: ComponentFixture<NotificationListener>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationListener]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationListener);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
