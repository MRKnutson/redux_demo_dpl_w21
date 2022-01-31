import { combineReducers } from "redux";
import toDos from "./toDos";
import NextId from "./NextId";
import filter from "./filter";

const rootReducer = combineReducers({
  // individual reducers
  todos: toDos,
  NextId: NextId,
  filter: filter,
});

export default rootReducer;
