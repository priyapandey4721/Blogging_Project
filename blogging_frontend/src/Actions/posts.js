import * as API from "../API/Myservices";
//Action creators
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await API.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const createPosts = (post) => async (dispatch) => {
  try {
    const { data } = await API.createPosts(post);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const editPosts =(id,post)=>async(dispatch)=>{
  try {
    
  } catch (error) {
    
  }
}