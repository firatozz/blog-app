import React from "react";
import BlogForm from "./BlogForm";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { editBlog } from "../actions/blogs";

const EditBlogPage = (props) => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Edit Page</h1>
      <BlogForm
        blog={props.blog}
        onSubmit={(blog) => {
          props.dispatch(editBlog(props.blog.id, blog));
          navigate("/blogs");
        }}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    blog: state.blogs.find((blog) => {
      return blog.id === useParams().id;
    }),
  };
};

export default connect(mapStateToProps)(EditBlogPage);
