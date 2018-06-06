import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalFavouritePageComponent } from './local-favourite-page.component';

describe('LocalFavouritePageComponent', () => {
  let component: LocalFavouritePageComponent;
  let fixture: ComponentFixture<LocalFavouritePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalFavouritePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalFavouritePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
