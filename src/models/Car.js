// @ts-check

import { observable } from 'mobx';

export default class Car {
    id = Math.random();
    @observable name;
    @observable country;

    constructor(name, country) {
        this.name = name;
        this.country = country;
    }
}