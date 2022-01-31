import React from "react";
import { connect } from "react-redux";

const Footer = (props) => {
  const getStyle = (filter) => {
    const init = { marginRight: "20px" };
    return filter === props.filter
      ? { ...init, textDecoration: "underline" }
      : { ...init };
  };

  const handleClick = (filter) => {
    props.dispatch({ type: "SET_FILTER", filter: filter });
  };
  return (
    <div>
      <span onClick={() => handleClick("all")} style={getStyle("all")}>
        all
      </span>
      <span
        onClick={() => handleClick("complete")}
        style={getStyle("complete")}
      >
        complete
      </span>
      <span
        onClick={() => handleClick("incomplete")}
        style={getStyle("incomplete")}
      >
        incomplete
      </span>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { filter: state.filter };
};

export default connect(mapStateToProps)(Footer);
