import { Component, OnInit, OnDestroy } from '@angular/core';

import 'rxjs/add/operator/map';
import { Subscription } from 'rxjs/Subscription';

import { BEPerson, PersonService } from './person.service';
import { Person, IPerson } from './person.model';
import { TransformUtil } from './transform.util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  public persons = [];

  constructor(
    private _PersonService: PersonService
  ) {}

  ngOnInit() {
    this.subscription = this._PersonService.get()
      .map < BEPerson[], IPerson[] > ((person) => TransformUtil.Transform < BEPerson, IPerson > (person, Person))
      .subscribe((persons) => this.persons = persons);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

