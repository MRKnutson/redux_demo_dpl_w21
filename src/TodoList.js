import React from "react";
import { connect } from "react-redux";
import ToDo from "./ToDo";

const TodoList = (props) => {
  return (
    <div>
      <p>Props:</p>
      {JSON.stringify(props)}
      <p>ToDos:</p>
      {props.todos.map((todo) => {
        return <ToDo {...todo} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { todos: state.todos };
};

export default connect(mapStateToProps)(TodoList);
