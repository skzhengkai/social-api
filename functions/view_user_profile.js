const fs = require('fs');
const path = require('path');

const usersPath = path.join(__dirname, '..', 'data', 'users.json');
const postsPath = path.join(__dirname, '..', 'data', 'posts.json');

module.exports = function viewUserProfile(userId) {
  const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));
  const posts = JSON.parse(fs.readFileSync(postsPath, 'utf-8'));

  // Find the user by ID
  const user = users.find((u) => u.id === userId);
  if (!user) {
    throw new Error('User not found');
  }

  // Filter the posts by the user ID
  const userPosts = posts
    .filter((p) => p.userId === userId)
    .map((p) => ({ id: p.id, content: p.content }));

  return {
    name: user.name,
    posts: userPosts,
  };
};
