import * as express from 'express';
import User from '../models/user';
import Post from '../models/post';

let router = express.Router();

router.post('/login', (req, res) => {
  User.findOne({username: req.body.username})
    .then((foundUser) => {
      if (foundUser && foundUser.password === req.body.password) {
        res.json(foundUser);
      } else {
        res.json('invalid login.');
      }
    })
    .catch((err) => res.json(err));
});

router.post('/register', (req, res) => {
  let user = new User();
  user.username = req.body.username;
  user.password = req.body.password;
  user.save()
    .then((savedUser) => res.json(savedUser))
    .catch((err) => res.json(err));
});

router.get('/:id/posts', (req, res) => {
  console.log(req.params.id);
  Post.find({userId: req.params.id})
    .then((foundPosts) => {
      console.log(foundPosts);
      res.json(foundPosts);

    }
  )
    .catch((err) => res.json(err));
});

export default router;
