const express = require('express');
const router = express.Router();
const db = require('../../db/users');

router.post('/createuser', (request, response) => {
  const { username, password } = request.body
  db.createUser( username, password )
  response.redirect('/')
})

module.exports = router
