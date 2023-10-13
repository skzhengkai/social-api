# Matthew Media Social API

A simple RESTful API for a social media platform built with Node.js and Express. This project includes features for user registration, creating posts, commenting on posts, and viewing profiles and posts. 

## Live Demo

You can try the live demo hosted at [https://matthew-media.awam.repl.co](https://matthew-media.awam.repl.co).

## Quick Start

Clone the repository and install the dependencies:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
```

Run the server:

```bash
npm start
```

## API Endpoints

### Register User
- **Endpoint**: `/register`
- **Method**: `POST`
- **Payload**: 
  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "password123"
  }
  ```
- **CURL Example**:

  ```bash
  curl -X POST -H "Content-Type: application/json" -d '{"name":"John Doe", "email":"john.doe@example.com", "password":"password123"}' https://matthew-media.awam.repl.co/register
  ```

### Create Post
- **Endpoint**: `/create-post`
- **Method**: `POST`
- **Header**: `Authorization: Bearer YOUR_AUTH_KEY`
- **Payload**:
  ```json
  {
    "content": "This is my first post."
  }
  ```
- **CURL Example**:

  ```bash
  curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer YOUR_AUTH_KEY" -d '{"content":"This is my first post."}' https://matthew-media.awam.repl.co/create-post
  ```

### Add Comment to Post
- **Endpoint**: `/add-comment/:postId`
- **Method**: `POST`
- **Header**: `Authorization: Bearer YOUR_AUTH_KEY`
- **Payload**:
  ```json
  {
    "comment": "This is my comment."
  }
  ```
- **CURL Example**:

  ```bash
  curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer YOUR_AUTH_KEY" -d '{"comment":"This is my comment."}' https://matthew-media.awam.repl.co/add-comment/1
  ```

### View Post
- **Endpoint**: `/view-post/:postId`
- **Method**: `GET`
- **CURL Example**:

  ```bash
  curl -X GET https://matthew-media.awam.repl.co/view-post/1
  ```

### View User Profile
- **Endpoint**: `/view-user/:userId`
- **Method**: `GET`
- **CURL Example**:

  ```bash
  curl -X GET https://matthew-media.awam.repl.co/view-user/1
  ```

## Contributing

Feel free to open issues and pull requests!
