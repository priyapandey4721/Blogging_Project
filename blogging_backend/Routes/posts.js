const router = require("express").Router();
const postsController = require("../Controllers/posts")
router.get("/getposts",postsController.getPosts)
router.get("/getpost/:id",postsController.getPost)
router.post("/createposts",postsController.createPosts)
router.patch("/editposts/:id",postsController.editPosts)
router.delete("/deletepost/:id",postsController.deletPost)
router.patch("/likepost/:id/likePost",postsController.likePosts)
module.exports = router;