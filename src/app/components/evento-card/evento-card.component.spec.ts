import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoCardComponent } from './evento-card.component';

describe('EventoCardComponent', () => {
  let component: EventoCardComponent;
  let fixture: ComponentFixture<EventoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventoCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
