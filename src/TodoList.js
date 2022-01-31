import React from "react";
import { connect } from "react-redux";
import ToDo from "./ToDo";

const TodoList = (props) => {
  const renderTodos = () => {
    let filteredTodos;
    if (props.filter == "complete") {
      filteredTodos = props.todos.filter((todo) => todo.complete);
    } else if (props.filter == "incomplete") {
      filteredTodos = props.todos.filter((todo) => !todo.complete);
    } else {
      filteredTodos = props.todos;
    }
    return filteredTodos;
  };
  return (
    <div>
      <p>Props:</p>
      {JSON.stringify(props)}
      <p>ToDos:</p>
      {/* {renderTodos()} */}
      {renderTodos().map((todo) => {
        return <ToDo key={todo.id} {...todo} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { todos: state.todos, filter: state.filter };
};

export default connect(mapStateToProps)(TodoList);
