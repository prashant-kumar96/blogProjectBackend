const Blog = require("../models/BlogModel");
let message, statusCode;
const createBlog = async (req, res) => {
  const { title, content, author } = req.body;

  try {
    const blog = new Blog({
      title,
      content,
      author,
      timestamp: {
        createdAt: new Date(),
      },
    });
    const result = await blog.save();
    if (result) {
      message = "Blog Created Successfully";
      statusCode = 200;
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

module.exports = createBlog;
