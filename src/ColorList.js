import React from 'react';
import Color from './Color'

function ColorList({
                     colors = [],
                     onRemoveColor = f => f,
                     onRateColor = f => f
                   }) {
  if (!colors.length) return <div>No Colors Listed. (Add a color)</div>;
  return (
    <div>
      {
        colors.map(color =>
          <Color
            key={color.id}
            {...color}
            onRemove={onRemoveColor}
            onRate={onRateColor}
          />
        )
      }
    </div>
  );
}

export default ColorList;