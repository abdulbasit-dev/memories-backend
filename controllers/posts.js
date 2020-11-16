const Post = require('../models/post')

const getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find()
    res.status(200).json(posts)
  } catch (err) {
    res.status(404).json({message: err.message})
  }
}

const createPost = async (req, res, next) => {
  const post = req.body
  const newPost = new Post(post)
  try {
    await newPost.save()
  } catch (err) {
    res.status(404).json({message: err.message})
  }

  res.status(201).json({message: 'post created', newPost: newPost.toObject({getters: true})})
}

exports.getPosts = getPosts
exports.createPost = createPost
