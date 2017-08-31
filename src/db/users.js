const db = require('../../db/users');
const express = require('express');
const router = express.Router();

const createUser = function( username, password ) {
  return db.none(`INSERT INTO users(username, password, role) 
    VALUES ($1, $2, 'regular')`, [ username, password ]);
}

const getUser = function(username) {
  return db.one(`SELECT * FROM users WHERE username = $1`, [username]);
}

module.exports = {
  createUser,
  getUser
}