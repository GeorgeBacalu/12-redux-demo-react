import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

const store = configureStore({ reducer: { counterReducer, authReducer } });

export default store;
