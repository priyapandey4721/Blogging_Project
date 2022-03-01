const mongoose = require("mongoose");
const postsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  selectedFile: String,
  creator: {
    type: String,
    required: true,
  },
  tags: [String],
  likeCount: {
    type: Number,
    default: 0,
  },
   createdAt: {
    type: Date,
    default: new Date(),
  },
});
module.exports = mongoose.model("Post", postsSchema);
