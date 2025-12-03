import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneSubscriber } from './one-subscriber';

describe('OneSubscriber', () => {
  let component: OneSubscriber;
  let fixture: ComponentFixture<OneSubscriber>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneSubscriber]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneSubscriber);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
