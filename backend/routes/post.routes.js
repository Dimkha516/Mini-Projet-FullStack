const express = require("express");
const {
  getAllPosts,
  getUniquePost,
  createPost,
  updatePost,
  likePost,
  unlikePost,
  deletePost,
} = require("../controllers/post.controller");

const router = express.Router();

router.get("/", getAllPosts);

router.get("/:id", getUniquePost);

router.post("/", createPost);

router.put("/:id", updatePost);

router.patch("/:id/likePost", likePost);

router.patch("/:id/unlike", unlikePost);

router.delete("/:id", deletePost);

module.exports = router;
