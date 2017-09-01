const router = require('express').Router();
const contacts = require('./contacts')
const DbContacts = require('../../db/contacts');
const loginSignup = require('../middlewares/loginSignup')
const users = require('./users');

router.get('/', (request, response) => {
  DbContacts.getContacts()
    .then((contacts) => {response.render('index', { contacts })})
    .catch( err => console.log('err', err) )
})

router.get('/signup', (request, response) => {
  response.render('signup')
})

router.use( '/contacts', contacts ); // /contacts/search
router.use( '/users', users ); 


module.exports = router;
