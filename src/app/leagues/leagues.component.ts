import { Component, OnInit } from '@angular/core';
import { LeagueService } from '../league.service';

import { League } from '../league.model'

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {
  leagues: League[];

  constructor(private leagueService: LeagueService) { }

  ngOnInit() {
    this.getLeagues();
  }

  getLeagues(): void {
    this.leagueService.getLeagues()
      .subscribe(leagues => this.leagues = leagues);
  }
}
