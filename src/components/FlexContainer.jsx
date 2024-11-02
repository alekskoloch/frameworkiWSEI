import React from 'react';

function FlexContainer({ element: Element, data, dispatch }) {
  return (
    <div className="d-flex flex-wrap">
      {data.map((item) => (
        <Element key={item.id} {...item} dispatch={dispatch} />
      ))}
    </div>
  );
}

export default FlexContainer;
