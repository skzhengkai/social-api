const fs = require('fs');
const path = require('path');

const postsPath = path.join(__dirname, '..', 'data', 'posts.json');
const usersPath = path.join(__dirname, '..', 'data', 'users.json');

module.exports = function addComment(authKey, postId, commentContent) {
  const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));
  const posts = JSON.parse(fs.readFileSync(postsPath, 'utf-8'));

  // Verify user authentication
  const user = users.find((u) => u.authKey === authKey);
  if (!user) {
    throw new Error('Unauthorized');
  }

  // Find the post by ID
  const post = posts.find((p) => p.id === postId);
  if (!post) {
    throw new Error('Post not found');
  }

  // Create new comment
  const newComment = {
    commentId: post.comments.length + 1,
    content: commentContent,
    userId: user.id,
    userName: user.name,
    timestamp: new Date().toISOString(),
  };

  // Append the comment to the post's comments
  post.comments.push(newComment);

  // Save the updated posts data
  fs.writeFileSync(postsPath, JSON.stringify(posts, null, 2));

  return newComment;
};
