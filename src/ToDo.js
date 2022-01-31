import React from "react";
import { connect } from "react-redux";
const ToDo = ({ name, id, complete, dispatch }) => {
  return (
    <div>
      <h3>{name}</h3>
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
