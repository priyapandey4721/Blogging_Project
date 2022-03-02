const mongoose = require("mongoose");
const postModel = require("../Models/postsSchema");
const userCtrl = {
  getPosts: async (req, res) => {
    try {
      const postMessages = await postModel.find();
      res.status(200).json(postMessages);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
  getPost: async(req,res)=>{
    try {
      const { title, message, creator, selectedFile, tags } = await postModel.findById(id);
      res.status(200).json({ title, message, creator, selectedFile, tags });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
  createPosts: async (req, res) => {
    const { title, message, creator, selectedFile, tags } = req.body;
    const newPost = new postModel({ title, message, creator, selectedFile, tags });
    try {
      await newPost.save();
      res.status(201).json(newPost);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  },
  editPosts: async (req, res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id))
      res.status(404).send("No post wit that id");

    const editedPost = { creator, title, message, tags, selectedFile, _id: id };
    await postModel.findByIdAndUpdate(
      id,
      editedPost,
      { new: true }
    );
    res.json(editedPost);
  },
  deletPost: async (req, res) => {
      const {id} =req.params
      if (!mongoose.Types.ObjectId.isValid(id))
      res.status(404).send("No post wit that id");
    await postModel.findByIdAndRemove(id);
    res.json({message:'Post Deleted Successfully'})
  },
  likePosts : async(req,res)=>{
    const {id} =req.params
      if (!mongoose.Types.ObjectId.isValid(id))
      res.status(404).send("No post wit that id");
    const post = await postModel.findById(id)
    const updatedPost = await postModel.findByIdAndUpdate(id,{likeCount : post.likeCount + 1},{new :true})
    res.json(updatedPost)
  }
};
module.exports = userCtrl;
