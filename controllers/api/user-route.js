const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// GET /api/users
router.get('/', (req, res) => {
    User.findAll({
      attributes: { exclude: ['password'] }
    })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


// GET /api/users/1 (id)
router.get('/:id', (req, res) => {
    User.findOne({
      attributes: { exclude: ['password'] },
      where: {
        id: req.params.id
      },
      include: [
        {
          model: Post,
          attributes: ['id', 'title', 'post_body', 'createdAt']
        },
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'createdAt'],
          include: {
            model: Post,
            attributes: ['title']
          }
        },
      ]
    })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// POST /api/users
router.post('/', (req, res) => {
  User.create({
    username: req.body.username,
    password: req.body.password
  })
  .then(dbUserData => {
    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.loggedIn = true;
      req.session.username = dbUserData.username;

      res.json(dbUserData);
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
})


// route to log in
router.post('/login', (req, res) => {
  User.findOne({
    where: {
      username: req.body.username
    }
  })
  .then(dbUserData => {
    if (!dbUserData) {
      res.status(400).json({ message: 'No account found with that username' });
      return;
    }

    // verify user
    const validPassword = dbUserData.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

      req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;

    res.json({ user: dbUserData, message: 'You are now logged in!' });
    });
  });
});


// log out
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
});


module.exports = router;