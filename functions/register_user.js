const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Define the path to the users.json file
const usersPath = path.join(__dirname, '..', 'data', 'users.json');

// Function to register user
module.exports = function registerUser(name, email, password) {
  // Read the existing users
  const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));

  // Check if email already exists
  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    throw new Error('Email already exists');
  }

  // Generate a special authentication key for the user
  const authKey = crypto.randomBytes(16).toString('hex');

  // Create the new user
  const newUser = {
    id: users.length + 1, // Auto-incremented user ID
    name,
    email,
    password, // NOTE: In a real application, NEVER store plain-text passwords
    authKey,
  };

  // Add the new user to the existing users
  users.push(newUser);

  // Save the updated user list
  fs.writeFileSync(usersPath, JSON.stringify(users, null, 2));

  return newUser;
};
