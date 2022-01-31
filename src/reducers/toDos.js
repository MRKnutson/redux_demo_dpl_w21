// our app has todos... these objects are name id and complete
// {name: string, id:number, complete:boolean}

// what is a reducer?
// A reducer is just a function that takes a state and an 'action' and returns a new state, without mutating original state.

const initialState = [
  { name: "initial State toDo", id: 0, complete: true },
  { name: "Todo1", id: 1, complete: true },
  { name: "Todo2", id: 2, complete: false },
];

// what is an action?
// An action is a javascript object that needs at least the type key
// {type:string, optionalKey.....}
// {type:SETTODOS, todos:[{},{}]}

const toDos = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TODOS":
      return action.todos;
    case "ADD_TODO":
      return [...state, action.todo];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    case "UPDATE_TODO":
      return state.map((todo) =>
        todo.id === action.todo.id ? action.todo : todo
      );
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, complete: !todo.complete } : todo
      );
    default:
      return state;
  }
};

export default toDos;
