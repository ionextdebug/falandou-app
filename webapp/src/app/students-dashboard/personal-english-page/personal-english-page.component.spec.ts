import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalEnglishPageComponent } from './personal-english-page.component';

describe('PersonalEnglishPageComponent', () => {
  let component: PersonalEnglishPageComponent;
  let fixture: ComponentFixture<PersonalEnglishPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalEnglishPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalEnglishPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
