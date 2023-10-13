const fs = require('fs');
const path = require('path');

const postsPath = path.join(__dirname, '..', 'data', 'posts.json');

module.exports = function viewPost(postId) {
  const posts = JSON.parse(fs.readFileSync(postsPath, 'utf-8'));

  // Find the post by ID
  const post = posts.find((p) => p.id === postId);

  if (!post) {
    throw new Error('Post not found');
  }

  return post;
};
