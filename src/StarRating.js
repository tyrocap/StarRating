import React, {useState} from 'react';
import {FaStar} from 'react-icons/fa';

const Star = ({selected = false, onSelect = f => f}) => (
  <FaStar color={selected ? "red" : "grey"} onClick={onSelect}/>
);

const createArray = length => [...Array(length)];

function StarRating({
                      style = {},
                      totalStars = 5,
                      selectedStars = 0,
                      onRate = f => f
                    }) {
  return (
    <div style={{padding: "5px", ...style}}>
      {
        createArray(totalStars).map((n, i) => (
            <Star
              key={i}
              selected={selectedStars > i}
              onSelect={() => onRate(i + 1)}
            />
          )
        )
      }
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
}

export default StarRating;

/*
In this example, I used 'useState' hook to add a state to a function.
General scheme is to have a user 'sensor' (e.g. onClick) in the child element
 (node of a component tree) and pass the signal along whenever it happens.
  At the end of the chain (parent of parent in this case), you will have a hook
 ('useState' in this case)  that will change the state of the final
  component. 'useState' is a function that returns an array, the first
   element of which is a state value (initially, this is used to set a
    default state; the second element is a function that is used to change
     the state of the component that the hook is attached to.


 */