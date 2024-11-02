import React from 'react';
import FlexContainer from '../components/FlexContainer';
import RatingBar from '../components/RatingBar';

const Item = ({ brand, year, color, registration, id, rating, dispatch, cars }) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [editedBrand, setEditedBrand] = React.useState(brand);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    // Sprawdzenie, czy cars jest zdefiniowane
    if (!cars) return;

    const updatedCars = cars.map(car => car.id === id ? { ...car, brand: editedBrand } : car);

    fetch('http://localhost:5000/update', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedCars)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.message);
        dispatch({
          type: "edit",
          id: id,
          brand: editedBrand
        });
        setIsEditing(false);
      })
      .catch(error => console.error('Error:', error));
  };

  const handleDelete = () => {
    dispatch({
      type: "delete",
      id: id
    });
  };

  const handleRate = () => {
    // Sprawdzenie, czy cars jest zdefiniowane
    if (!cars) return;

    const newRating = rating === 10 ? 0 : rating + 1;
    const updatedCars = cars.map(car => car.id === id ? { ...car, rating: newRating } : car);

    fetch('http://localhost:5000/update', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedCars)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.message);
        dispatch({
          type: "rate",
          id: id,
          rating: newRating
        });
      })
      .catch(error => console.error('Error:', error));
  };

  const handleDirectRate = (newRating) => {
    // Sprawdzenie, czy cars jest zdefiniowane
    if (!cars) return;

    const updatedCars = cars.map(car => car.id === id ? { ...car, rating: newRating } : car);

    fetch('http://localhost:5000/update', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedCars)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.message);
        dispatch({
          type: "rate",
          id: id,
          rating: newRating
        });
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="card" style={{ width: '18rem', margin: '10px' }}>
      <div className="card-body">
        {isEditing ? (
          <div>
            <input
              type="text"
              value={editedBrand}
              onChange={(e) => setEditedBrand(e.target.value)}
              className="form-control mb-2"
            />
            <button onClick={handleSave} className="btn btn-success">Save</button>
          </div>
        ) : (
          <h5 className="card-title">{brand}</h5>
        )}
        <p className="card-text">Year: {year}</p>
        <p className="card-text">Color: {color}</p>
        <p className="card-text">Registration: {registration}</p>
        <RatingBar rate={rating} onRate={handleDirectRate} />
        <div className="d-flex justify-content-between">
          <button onClick={handleEditToggle} className="btn btn-primary">
            {isEditing ? "Cancel" : "Edit"}
          </button>
          <button onClick={handleDelete} className="btn btn-danger">Delete</button>
          <button onClick={handleRate} className="btn btn-warning">Rate</button>
        </div>
      </div>
    </div>
  );
};

const Lab3Page = ({ cars, dispatch }) => {
  return (
    <div>
      <h1>Laboratorium 3</h1>
      <FlexContainer element={Item} data={cars} dispatch={dispatch} cars={cars} />
    </div>
  );
};

export default Lab3Page;
