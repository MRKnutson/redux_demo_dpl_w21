import { combineReducers } from "redux";
import toDos from "./toDos";

const rootReducer = combineReducers({
  // individual reducers
  todos: toDos,
});

export default rootReducer;
