import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addBlog } from "./actions/blogs";

const store = configureStore();

store.dispatch(addBlog({ title: "blog 1", description: "Blog desc 1" }));
store.dispatch(addBlog({ title: "blog 2", description: "Blog desc 2" }));
store.dispatch(addBlog({ title: "blog 3", description: "Blog desc 3" }));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

reportWebVitals();
