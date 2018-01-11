import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { LeagueService } from './league.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    LeaguesComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [LeagueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
