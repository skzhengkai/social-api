const express = require('express');
const bodyParser = require('body-parser');
const registerUser = require('./functions/register_user');
const createPost = require('./functions/create_post');
const addComment = require('./functions/add_comment');
const viewPost = require('./functions/view_post');
const viewUserProfile = require('./functions/view_user_profile');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Register User POST Endpoint
app.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Call the registerUser function
    const newUser = registerUser(name, email, password);

    // Send back the user data along with the special authentication key
    res.status(201).json({
      message: 'User successfully registered',
      user: newUser,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

// Create Post POST Endpoint
app.post('/create-post', (req, res) => {
  const { authKey, content } = req.body;

  try {
    // Call the createPost function
    const newPost = createPost(authKey, content);

    // Send back the post data
    res.status(201).json({
      message: 'Post successfully created',
      post: newPost,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

// Add Comment POST Endpoint
app.post('/add-comment', (req, res) => {
  const { authKey, postId, commentContent } = req.body;

  try {
    // Call the addComment function
    const newComment = addComment(authKey, postId, commentContent);

    // Send back the comment data
    res.status(201).json({
      message: 'Comment successfully added',
      comment: newComment,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

// View Post GET Endpoint
app.get('/view-post/:postId', (req, res) => {
  const postId = parseInt(req.params.postId, 10);

  try {
    // Call the viewPost function
    const post = viewPost(postId);

    // Send back the post data
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

// View User Profile GET Endpoint
app.get('/view-user/:userId', (req, res) => {
  const userId = parseInt(req.params.userId, 10);

  try {
    // Call the viewUserProfile function
    const userProfile = viewUserProfile(userId);

    // Send back the user profile data
    res.status(200).json(userProfile);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});