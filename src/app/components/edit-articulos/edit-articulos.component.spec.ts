import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditArticulosComponent } from './edit-articulos.component';

describe('EditArticulosComponent', () => {
  let component: EditArticulosComponent;
  let fixture: ComponentFixture<EditArticulosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditArticulosComponent]
    });
    fixture = TestBed.createComponent(EditArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
