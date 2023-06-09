import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Blog App</h1>
      <NavLink to='/' className={({ isActive }) => (isActive ? "active" : "")} exact='true'>
        Home
      </NavLink>
      <NavLink to='/blogs' className={({ isActive }) => (isActive ? "active" : "")} exact='true'>
        Blogs
      </NavLink>
      <NavLink to='/create' className={({ isActive }) => (isActive ? "active" : "")} exact='true'>
        Create
      </NavLink>
      <NavLink to='/contact' className={({ isActive }) => (isActive ? "active" : "")}>
        Contact
      </NavLink>
    </header>
  );
};

export default Header;
