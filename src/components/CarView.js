import React from 'react'
import { observer } from 'mobx-react';

const CarView = observer(({car}) => (
    <li>
        <pre>
            {car.name}
        </pre>
    </li>
));

export default CarView;