// @ts-check

import { observable, computed } from 'mobx';

export default class CarList {
    @observable cars = [];

    @computed get germanCars() {
        return this.cars.filter(car => car.country === 'DE')
    }
}