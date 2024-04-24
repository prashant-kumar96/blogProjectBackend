const express = require("express");
const createBlog = require("../apis/createBlog");
const updateBlog = require("../apis/updateBlog");
const deleteBlog = require("../apis/deleteBlog");
const readBlog = require("../apis/readBlog");
const getAllBlogs = require("../apis/getAllBlogs");
const blogRouter = express.Router();

blogRouter.post("/createBlog", (req, res) => {
  createBlog(req, res);
});

blogRouter.get("/readBlog", (req, res) => {
  readBlog(req, res);
});

blogRouter.put("/updateBlog", (req, res) => {
  updateBlog(req, res);
});

blogRouter.delete("/deleteBlog", (req, res) => {
  deleteBlog(req, res);
});

blogRouter.get("/getAllBlogs", (req, res) => {
  getAllBlogs(req, res);
});

module.exports = blogRouter;
