import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const leagues = [
            { id: 1, name: 'Global Starcraft II League', abbreviation: 'GSL' },
            { id: 2, name: 'Collegiate Starcraft II League', abbreviation: 'CSL' },
            { id: 3, name: 'Chobo Team League', abbreviation: 'CTL' }
        ];

        return {leagues}
    }
}