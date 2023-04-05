import { combineReducers, legacy_createStore as createStore } from "redux";
import blogReducer from "./../reducers/blogs";
import authReducer from "./../reducers/auth";

function store() {
  const store = createStore(
    combineReducers({
      blogs: blogReducer,
      auth: authReducer,
    })
  );
  return store;
}

export default store;
