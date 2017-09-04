const express = require('express');
const router = express.Router();
const db = require('../../db/users');

const bcrypt = require('bcrypt');

router.post('/createuser', (request, response) => {
  const { username, password } = request.body;

  bcrypt.hash(password, 10, function (err, hash) {
    db.createUser(username, hash)
      .catch(err => console.log('err', err));
    response.redirect('/login');
  });
});

router.post('/loginuser', (request, response) => {
  const { username, password: plainPassword } = request.body;

  db.getUser(username)
    .then((user) => {
      bcrypt.compare(plainPassword, user.password, function (err, res) {
        if (res === true) {
          request.session.user = user;
          response.redirect('/');
        }
        else {
          response.render('login', { error: true });
        }
      });
    })
    .catch((noUser) => {
      response.render('login', { error: true });
    });
});

module.exports = router;
