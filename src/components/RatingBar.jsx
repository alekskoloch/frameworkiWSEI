import React, { useState } from 'react';

const RatingBar = ({ rate, onRate }) => {
  const [hoveredRating, setHoveredRating] = useState(0);

  return (
    <div>
      {Array.from({ length: 10 }, (_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={index}
            style={{ fontSize: '24px', color: starValue <= (hoveredRating || rate) ? '#ffc107' : '#e4e5e9', cursor: 'pointer' }}
            onMouseEnter={() => setHoveredRating(starValue)}
            onMouseLeave={() => setHoveredRating(0)}
            onClick={() => onRate(starValue)}
          >
            {starValue <= (hoveredRating || rate) ? '★' : '☆'}
          </span>
        );
      })}
    </div>
  );
};

export default RatingBar;
