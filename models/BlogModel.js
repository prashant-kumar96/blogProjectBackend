const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: "string",
    required: true,
    unique: true,
  },
  content: {
    type: "string",
    required: true,
  },
  author: {
    type: "string",
    required: true,
  },
  timestamp: {
    createdAt: {
      type: Date,
    },
    updatedAt: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
