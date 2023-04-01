import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./../components/HomePage";
import BlogListPage from "./../components/BlogListPage";
import BlogDetailsPage from "./../components/BlogDetailsPage";
import ContactPage from "./../components/ContactPage";
import NotFoundPage from "./../components/NotFoundPage";
import Header from "./../components/Header";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header></Header>
        <Routes>
          <Route path='/' element={<HomePage />} exact='true'></Route>
          <Route path='/blogs' element={<BlogListPage />} exact='true'></Route>
          <Route path='/blogs/:id' element={<BlogDetailsPage />}></Route>
          <Route path='/contact' element={<ContactPage />}></Route>
          <Route path='*' element={<NotFoundPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
