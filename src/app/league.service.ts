import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { environment } from '../../src/environments/environment';
import { League } from './league.model';

@Injectable()
export class LeagueService {
  private leaguesUrl = `${environment.baseApiEndpoint}/leagues`;

  constructor(private http: HttpClient) { }

  getLeagues(): Observable<League[]> {
    return this.http.get<League[]>(this.leaguesUrl); 
  }

}
