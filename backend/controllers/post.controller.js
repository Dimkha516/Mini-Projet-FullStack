const postModel = require("../models/post.model");

// RÉCUPÉRATION DE TOUS LES POSTS:
module.exports.getAllPosts = async (req, res) => {
  const allPosts = await postModel.find();
  if (!allPosts) {
    res.status(101).json({ message: "Aucun post trouvé" });
  } else {
    res.status(200).json({ allPosts });
  }
};

// RÉCUPÉRATION D'UN SEUL POST:
module.exports.getUniquePost = async (req, res) => {
  try {
    const searchedPost = await postModel.findById(req.params.id);
    res.status(200).json({ searchedPost });
  } catch (err) {
    res.status(400).json({ message: "Id post introuvable" });
  }
};

// AJOUTER UN NOUVEAU POST:
module.exports.createPost = async (req, res) => {
  try {
    const newPost = await postModel.create({
      message: req.body.message,
      auteur: req.body.auteur,
    });
    res.status(200).json({ newPost });
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

// MODIFIER UN POST:
module.exports.updatePost = async (req, res) => {
  const postId = await postModel.findById(req.params.id);
  if (!postId) {
    res.status(400).send("Ce post n'existe pas");
  }
  const updatePost = await postModel.findByIdAndUpdate(postId, req.body, {
    new: true,
  });
  res.status(200).send(updatePost);
};

// LIKER UN POST:
module.exports.likePost = async (req, res) => {
  const likedId = await postModel.findById(req.params.id);
  if (!likedId) {
    res.status(400).send("Id Post Introuvable");
  }

  try {
    const likedpost = await postModel.findByIdAndUpdate(
      likedId,
      { $addToSet: { likers: req.body.likerId } },
      { new: true }
    );
    res.status(200).send(likedpost);
  } catch (err) {
    res.status(400).send(err);
  }
};

// UNLIKER UN POST:
module.exports.unlikePost = async (req, res) => {
  const dislikedId = await postModel.findById(req.params.id);
  if (!dislikedId) {
    res.status(400).send("Id Post Introuvable");
  }

  try {
    const dislikedpost = await postModel.findByIdAndUpdate(
      dislikedId,
      { $pull: { likers: req.body.dislikerId } },
      { new: true }
    );
    res.status(200).send(dislikedpost);
  } catch (err) {
    res.status(400).send(err);
  }
};
// SUPPRIMER UN POST:
module.exports.deletePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const deletedPost = await postModel.findByIdAndDelete(postId);
    if (!deletedPost) {
      res.status(404).json({ message: "Post non trouvé" });
    }

    res.status(200).json({ message: "Post supprimé avec succès" });
  } catch (error) {
    res.status(500).json({ message: "Une erreur s'est produite", error });
  }
};
