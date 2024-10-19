import React from 'react';

const CarProfile = ({ car }) => {
  return (
    <div>
      <h2>Car Profile</h2>
      <p><strong>Brand:</strong> {car.brand}</p>
      <p><strong>Year:</strong> {car.year}</p>
      <p><strong>Color:</strong> {car.color}</p>
      <p><strong>Registration:</strong> {car.registration}</p>
    </div>
  );
};

export default CarProfile;