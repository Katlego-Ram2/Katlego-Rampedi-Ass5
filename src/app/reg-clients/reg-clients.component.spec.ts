import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegClientsComponent } from './reg-clients.component';

describe('RegClientsComponent', () => {
  let component: RegClientsComponent;
  let fixture: ComponentFixture<RegClientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegClientsComponent]
    });
    fixture = TestBed.createComponent(RegClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
