import React from 'react';
import { data } from '../data/module-data';
import CarProfile from '../components/CarProfile';

const Lab1 = () => {
  return (
    <div>
      {data.map(car => (
        <CarProfile key={car.id} car={car} />
      ))}
    </div>
  );
};

export default Lab1;
