import { Component } from '@angular/core'
import { TestBed, async } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LeaguesComponent } from './leagues/leagues.component'
import { AppRoutingModule } from './/app-routing.module';
import { APP_BASE_HREF } from '@angular/common'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MockNavigationComponent,
        LeaguesComponent,
        HomeComponent,
        AppComponent
      ],
      imports: [
        
        AppRoutingModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/'}
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
});

@Component({
  selector: 'app-navigation',
  template: ''
})
class MockNavigationComponent { }

@Component({
  selector: 'app-leagues',
  template: ''
})
class MockLeaguesComponent { }

@Component({
  selector: 'app-home',
  template: ''
})
class MockHomeComponent { }