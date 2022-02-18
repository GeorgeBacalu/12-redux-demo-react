import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT": return { counter: state.counter + 1, showCounter: state.showCounter };
    case "DECREMENT": return { counter: state.counter - 1, showCounter: state.showCounter };
    case "INCREASE": return { counter: state.counter + action.value, showCounter: state.showCounter };
    case "DECREASE": return { counter: state.counter - action.value, showCounter: state.showCounter };
    case "TOGGLE": return { counter: state.counter, showCounter: !state.showCounter };
    default:  return initialState;
  }
};

const store = createStore(counterReducer);

export default store;
