import { Injectable } from '@angular/core';
import { Element } from './element';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getElement(id: number): Observable<Element> {
    const element = ELEMENT.find(h => h.id === id)!;
    return of(element);
  }
}