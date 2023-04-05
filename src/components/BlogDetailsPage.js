import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import BlogDetailsItem from "./BlogDetailsItem";

const BlogDetailsPage = (props) => {
  return <BlogDetailsItem {...props.blog} />;
};

const mapStateToProps = (state) => {
  return {
    blog: state.blogs.find((blog) => {
      return blog.id === useParams().id;
    }),
  };
};

export default connect(mapStateToProps)(BlogDetailsPage);
