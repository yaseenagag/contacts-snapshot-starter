const express = require('express');
const router = express.Router();
const db = require('./db');

const createUser = function( username, password ) {
  return db.none(`INSERT INTO users(username, password, role) 
    VALUES($1, $2, 'regular')`, [ username, password ]);
}

const getUser = function(username) {
  return db.one(`SELECT * FROM users WHERE username = $1`, [username]);
}

module.exports = {
  createUser,
  getUser
}