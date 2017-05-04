import * as express from 'express';
import Post from '../models/post';

let router = express.Router();

router.get('/', (req, res) => {
  Post.find()
    .then((posts) => res.json(posts))
    .catch((err) => res.json(err));
});

router.post('/', (req, res) => {
  let post = new Post();
  post.content = req.body.content;
  post.dateCreated = req.body.dateCreated;
  post.userId = req.body.userId;
  post.username = req.body.username;
  post.save()
    .then((savedPost) => res.json(savedPost))
    .catch((err) => res.json(err));
});

export default router;
