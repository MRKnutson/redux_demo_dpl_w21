import React from "react";
import { connect } from "react-redux";
const ToDo = ({ name, id, complete, dispatch }) => {
  const getStyle = () => {
    return complete ? { color: "grey", textDecoration: "line-through" } : {};
  };

  return (
    <div>
      <h3 style={getStyle()}>{name}</h3>
      <p onClick={() => dispatch({ type: "TOGGLE_TODO", id: id })}>Toggle</p>
      <button
        onClick={() => {
          dispatch({ type: "DELETE_TODO", id: id });
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default connect()(ToDo);
