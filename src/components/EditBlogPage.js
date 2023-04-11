import React from "react";
import BlogForm from "./BlogForm";
import { connect } from "react-redux";
import { editBlog, removeBlog } from "../actions/blogs";
import { useParams, useNavigate } from "react-router-dom";

const EditBlogPage = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Edit Page</h1>
      <BlogForm
        blog={props.blog}
        onSubmit={(blog) => {
          props.dispatch(editBlog({ id: props.blog.id, updates: blog }));
          navigate("/blogs");
        }}
      />
      <button
        onClick={() => {
          props.dispatch(removeBlog({ id: props.blog.id }));
          navigate("/blogs");
        }}>
        Delete
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    blog: state.blogs.find((blog) => {
      const params = useParams();
      return blog.id === params.id;
    }),
  };
};

export default connect(mapStateToProps)(EditBlogPage);
