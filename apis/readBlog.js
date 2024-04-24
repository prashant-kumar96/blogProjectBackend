const Blog = require("../models/BlogModel");
let message,
  statusCode,
  data = {};
const readBlog = async (req, res) => {
  try {
    const result = await Blog.findById(req.body._id);

    if (!result) {
      message = "No Blog exists with provided id";
      statusCode = 404;
    }
    if (result) {
      message = "Blog fetched Successfully";
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

module.exports = readBlog;
