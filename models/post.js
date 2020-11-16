const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postSchema = new Schema(
  {
    title: {type: String, required: true},
    message: {type: String, required: true},
    creator: {type: String, required: true},
    tag: {type: [String]},
    selectedFile: {type: String},
    likeCount: {type: Number, default: 0},
  },
  {timestamps: true}
)

const Post = mongoose.model('Post', postSchema)

module.exports = Post
