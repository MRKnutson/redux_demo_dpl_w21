import React from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";

const TodoForm = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    let todo = { name: data.name, complete: false, id: props.nextId };
    props.dispatch({ type: "ADD_TODO", todo: todo });
    props.dispatch({ type: "INC_ID" });
    // console.log(data);
    // console.log(watch("firstName"));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>ToDo Name:</p>
      {errors.name && errors.name.type == "maxLength" && (
        <span style={{ color: "red" }}>Too Long</span>
      )}
      {errors.name && errors.name.type == "required" && (
        <span style={{ color: "red" }}>required</span>
      )}
      <input {...register("name", { required: true, maxLength: 20 })} />
      <input type='submit' />
    </form>
  );
};
const mapStateToProps = (state) => {
  return { NextId: state.NextId, todos: state.todos };
};

export default connect(mapStateToProps)(TodoForm);
