const router = require("express").Router();
const postsController = require("../Controllers/posts")
router.get("/getposts",postsController.getPosts)
router.post("/createposts",postsController.createPosts)
router.patch("/editposts/:id",postsController.editPosts)
module.exports = router;