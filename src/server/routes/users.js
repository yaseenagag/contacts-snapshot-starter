const express = require('express');
const router = express.Router();
const db = require('../../db/users');

router.post('/createuser', (request, response) => {
  const {username, password} = request.body
  db.createUser( request.body )
  console.log('request.body', request.body)
})

module.exports = router
