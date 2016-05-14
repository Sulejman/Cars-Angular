import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import { ICar } from './car';

@Injectable()
export class CarService {
    private _carsUrl = 'http://localhost:1337/car';

    constructor(private _http: Http) { }

    getCars(): Observable<ICar[]> {
        return this._http.get(this._carsUrl)
            .map((response: Response) => <ICar[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getCar(id: number): Observable<ICar> {
        return this.getCars()
            .map((products: ICar[]) => products.find(car => car.id === id));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
