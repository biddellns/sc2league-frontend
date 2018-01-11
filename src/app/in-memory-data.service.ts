import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const leagues = [
            { name: 'Global Starcraft II League', abbreviation: 'GSL' },
            { name: 'Collegiate Starcraft II League', abbreviation: 'CSL' },
            { name: 'Chobo Team League', abbreviation: 'CTL' }
        ];

        return {leagues}
    }
}