const Blog = require("../models/BlogModel");
let message, statusCode;
const updateBlog = async (req, res) => {
  const { title, content, author } = req.body;

  try {
    const blog = {
      title,
      content,
      author,
      timestamp: {
        updatedAt: new Date(),
      },
    };
    const result = await Blog.findByIdAndUpdate(req.body._id, blog);
    if (!result) {
      message = `Blog Not Found with provided id`;
      statusCode = 404;
    } else {
      message = "Blog Updated Successfully";
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

module.exports = updateBlog;
