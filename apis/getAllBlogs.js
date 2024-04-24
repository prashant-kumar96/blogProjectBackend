const Blog = require("../models/BlogModel");
let message,
  statusCode,
  data = {};
const getAllBlogs = async (req, res) => {
  try {
    const result = await Blog.find();
    if (result) {
      message = "All Blogs fetched Successfully";
      statusCode = 200;
      data = result;
    }
  } catch (err) {
    if (err) {
      message = err.message;
      statusCode = 400;
    }
  } finally {
    res.json({ message, statusCode, data });
  }
};

module.exports = getAllBlogs;
