import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentPrincipalComponent } from './component-principal.component';

describe('ComponentPrincipalComponent', () => {
  let component: ComponentPrincipalComponent;
  let fixture: ComponentFixture<ComponentPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentPrincipalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
