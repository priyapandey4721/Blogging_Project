import axios from 'axios'
import { MAIN_URL } from "./Url";

export function fetchPosts() {
  return axios.get(`${MAIN_URL}posts/getposts`);
}
export function createPosts(newPost) {
  return axios.post(`${MAIN_URL}posts/createposts`,newPost);
}
export function editPosts(id,editPosts){
  return axios.patch(`${MAIN_URL}posts/editposts/${id}`,editPosts)
}
export function deletePost(id){
  return axios.delete(`${MAIN_URL}posts/deletepost/${id}`)
}
export function likePosts(id){
  return axios.patch(`${MAIN_URL}posts/likepost/${id}/likePost`)
}