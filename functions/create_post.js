const fs = require('fs');
const path = require('path');

// Define the path to the posts.json file
const postsPath = path.join(__dirname, '..', 'data', 'posts.json');
// Define the path to the users.json file
const usersPath = path.join(__dirname, '..', 'data', 'users.json');

module.exports = function createPost(authKey, content) {
  // Read the existing users and posts
  const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));
  const posts = JSON.parse(fs.readFileSync(postsPath, 'utf-8'));

  // Verify the user with the provided authKey
  const user = users.find((u) => u.authKey === authKey);
  if (!user) {
    throw new Error('Unauthorized');
  }

  // Create the new post
  const newPost = {
    id: posts.length + 1, // Auto-incremented post ID
    content,
    userId: user.id,
    userName: user.name,
    timestamp: new Date().toISOString(),
    comments: []  // Empty comments array
  };

  // Add the new post to the existing posts
  posts.push(newPost);

  // Save the updated post list
  fs.writeFileSync(postsPath, JSON.stringify(posts, null, 2));

  return newPost;
};