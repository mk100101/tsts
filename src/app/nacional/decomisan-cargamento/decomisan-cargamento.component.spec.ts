import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecomisanCargamentoComponent } from './decomisan-cargamento.component';

describe('DecomisanCargamentoComponent', () => {
  let component: DecomisanCargamentoComponent;
  let fixture: ComponentFixture<DecomisanCargamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecomisanCargamentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DecomisanCargamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
