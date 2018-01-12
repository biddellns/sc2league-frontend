import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LeaguesComponent } from './leagues/leagues.component'
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'leagues', component: LeaguesComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

