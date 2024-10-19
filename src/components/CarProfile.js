import React from 'react';

const CarProfile = ({ car }) => {
  return (
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">Car Profile</h5>
        <p><strong>Brand:</strong> {car.brand}</p>
        <p><strong>Year:</strong> {car.year}</p>
        <p><strong>Color:</strong> {car.color}</p>
        <p><strong>Registration:</strong> {car.registration}</p>
      </div>
    </div>
  );
};

export default CarProfile;
