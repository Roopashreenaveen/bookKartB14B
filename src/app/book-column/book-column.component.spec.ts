import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookColumnComponent } from './book-column.component';

describe('BookColumnComponent', () => {
  let component: BookColumnComponent;
  let fixture: ComponentFixture<BookColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
