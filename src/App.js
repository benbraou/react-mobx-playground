import React, { Component } from 'react';

import CarListView from './components/CarListView';
import CarList from './models/CarList';
import Car from './models/Car';
import logo from './logo.svg';
import './App.css';

const store = new CarList();
store.cars.push(new Car('BMW', 'DE'), new Car('FERRARI', 'IT'));

class App extends Component {
  render() {
    return (
      <div className="App">
        <CarListView carList = {store}></CarListView>
      </div>
    );
  }
}

// For Eval button
window.store = store;

export default App;
