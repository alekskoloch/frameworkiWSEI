import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { data } from '../data/module-data';
import CarProfile from '../components/CarProfile';

const Lab2 = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [inputId, setInputId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputId) {
      navigate(`/lab2/${inputId}`);
    }
  };

  if (!id) {
    return (
      <div className="container mt-4">
        <h2 className="text-center mb-4">Wyszukaj auto według ID</h2>
        <form onSubmit={handleSubmit} className="d-flex justify-content-center">
          <div className="form-group">
            <label htmlFor="inputId" className="form-label">Podaj ID auta:</label>
            <input
              id="inputId"
              type="number"
              className="form-control"
              value={inputId}
              onChange={(e) => setInputId(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary ms-2">Szukaj</button>
        </form>
      </div>
    );
  }

  const car = data.find(car => car.id === parseInt(id));

  if (!car) {
    return <p className="text-center">Nie znaleziono auta o tym identyfikatorze.</p>;
  }

  return (
    <div className="container mt-4">
      <CarProfile car={car} />
    </div>
  );
};

export default Lab2;
