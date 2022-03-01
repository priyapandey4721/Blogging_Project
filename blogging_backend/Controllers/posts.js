const { default: mongoose } = require("mongoose");
const postModel = require("../Models/postsSchema");
const userCtrl = {
  getPosts: async(req, res) => {
      try {
          const postMessages = await postModel.find();
          console.log(postMessages);
          res.status(200).json(postMessages)
      } catch (error) {
          res.status(404).json({message:error.message})
      }
  },
  createPosts: async(req, res) => {
      const post = req.body
      const newPost = new postModel(post)
      try {
         await newPost.save();
         res.status(201).json(newPost)
      } catch (error) {
          res.status(409).json({message:error.message})
      }
  },
  editPosts : async(req,res)=>{
    const {id : _id} = req.params
    const post = req.body
    if(mongoose.Types.ObjectId.isValid(_id))
    res.status(404).send('No post wit that id');
    const editedPost = await postModel.findByIdAndUpdate(_id,post,{new:true})
    res.json(editedPost)
}

};
module.exports = userCtrl;
