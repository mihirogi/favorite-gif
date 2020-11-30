import { TestBed } from '@angular/core/testing';
import { SearchModule } from './search/search.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './search/components/route/home/home.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
