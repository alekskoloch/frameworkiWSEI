import React, { useState } from 'react';
import FlexContainer from '../components/FlexContainer';
import { data } from '../module-data';
import RatingBar from '../components/RatingBar';

const Item = ({ brand, year, color, registration, id, rating, dispatch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedBrand, setEditedBrand] = useState(brand);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    dispatch({
      type: "edit",
      id: id,
      brand: editedBrand
    });
    setIsEditing(false);
  };

  const handleDelete = () => {
    dispatch({
      type: "delete",
      id: id
    });
  };

  const handleRate = () => {
    dispatch({
      type: "rate",
      id: id,
      rating: rating === 10 ? 0 : rating + 1
    });
  };

  const handleDirectRate = (newRating) => {
    dispatch({
      type: "rate",
      id: id,
      rating: newRating
    });
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

const Lab3Page = () => {
  return (
    <div>
      <h1>Laboratorium 3</h1>
      <FlexContainer element={Item} data={data} />
    </div>
  );
};

export default Lab3Page;
