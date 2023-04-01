import React from "react";
import { useParams } from "react-router-dom";

const BlogDetailsPage = () => {
  const params = useParams();

  return <div>Blog Details : {params.id}</div>;
};

export default BlogDetailsPage;
