import React from 'react';
import { data } from '../data/module-data';
import CarProfile from '../components/CarProfile';

const Lab1 = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Lista aut</h2>
      <div className="row">
        {data.map((car, index) => (
          <div key={index} className="col-md-4 mb-3">
            <CarProfile car={car} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lab1;
