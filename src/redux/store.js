// src/redux/store.js
import { createStore, combineReducers } from "redux";
import cartReducer from "./reducers/cartSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  // other reducers if necessary
});

const store = createStore(rootReducer);

export default store;
