import {
  FETCH_ALL,
  LIKE,
  CREATE,
  DELETE,
  EDIT,
} from "../Constants/actionTypes";
import * as API from "../API/Myservices";
//Action creators
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await API.fetchPosts();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const createPosts = (post) => async (dispatch) => {
  try {
    const { data } = await API.createPosts(post);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const editPosts = (id, post) => async (dispatch) => {
  try {
    const { data } = await API.editPosts(id, post);
    dispatch({ type: EDIT, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const deletePost = (id) => async (dispatch) => {
  try {
    await API.deletePost(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
export const likePosts = (id) => async (dispatch) => {
  try {
    const { data } = await API.likePosts(id);
    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
