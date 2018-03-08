import React from 'react'
import { observer } from 'mobx-react';
import CarView from './CarView';

@observer class CarListView extends React.Component {
    render() {
        return (
            <ul>
                {this.props.carList.germanCars.map(car =>
                    <CarView car = {car} key = {car.id} />
                )}
            </ul>
        );
    }
}

export default CarListView;