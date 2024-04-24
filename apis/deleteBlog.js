const Blog = require("../models/BlogModel");
let message, statusCode;
const deleteBlog = async (req, res) => {
  try {
    const result = await Blog.findByIdAndDelete(req.query.id);
    if (!result) {
      message = "Blog Not found with provided id";
      statusCode = 404;
      data = result;
    } else {
      message = "Blog Deleted Successfully";
      statusCode = 200;
      data = result;
    }
  } catch (err) {
    if (err) {
      message = err.message;
      statusCode = 400;
    }
  } finally {
    res.json({ message, statusCode });
  }
};

module.exports = deleteBlog;
