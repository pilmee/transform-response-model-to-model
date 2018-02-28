import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { fakeData } from './person.data';

export interface BEPerson {
  name: string;
  lastName: string;
  birthdate: string;
}

@Injectable()
export class PersonService {
  get(): Observable < BEPerson[] > {
    return Observable.of(fakeData);
  }
}

