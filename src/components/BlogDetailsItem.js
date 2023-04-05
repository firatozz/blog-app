import React from "react";

const BlogDetailsItem = (blog) => {
  return (
    <div>
      <h1>BlogDetailsItem</h1>
      <p>blog id: {blog.id}</p>
      <p>title: {blog.title}</p>
      <p>description: {blog.description}</p>
    </div>
  );
};

export default BlogDetailsItem;
