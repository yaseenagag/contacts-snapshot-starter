const router = require('express').Router();
const contacts = require('./contacts')
const DbContacts = require('../../db/contacts');
const loginSignUp = require('../middlewares/loginSignUp')
const users = require('./users');

router.use( '/users', users ); 

router.get('/', loginSignUp, (request, response) => {
  response.locals.username = request.session.user.username;
  response.locals.role = request.session.user.role;

  DbContacts.getContacts()
    .then((contacts) => {response.render('index', { contacts })})
    .catch( err => console.log('err', err) )
})

router.get('/signup', (request, response) => {
  response.render('signup')
})

router.get('/login', (request, response) => {
  response.render('login', {error: false});
})

router.use( '/contacts', contacts ); // /contacts/search


module.exports = router;
