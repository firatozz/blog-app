import { v4 as uuid } from "uuid";

export const addBlog = ({ title = "", description = "", dateAdded = Date.now }) => ({
  type: "ADD_BLOG",
  blog: {
    id: uuid(),
    title: title,
    description: description,
    dateAdded: dateAdded,
  },
});

export const removeBlog = ({ id }) => ({
  type: "REMOVE_BLOG",
  id: id,
});

export const editBlog = (id, updates) => ({
  type: "EDIT_BLOG",
  id,
  updates,
});
