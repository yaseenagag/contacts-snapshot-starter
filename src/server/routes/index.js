const router = require('express').Router();
const contacts = require('./contacts')
const DbContacts = require('../../db/contacts');
// const loginSignup = require('./loginSignup')

router.get('/', (request, response) => {
  DbContacts.getContacts()
    .then((contacts) => {response.render('index', { contacts })})
    .catch( err => console.log('err', err) )
})

router.use( '/contacts', contacts ); // /contacts/search
// router.use( '/', loginSignup )
// router.use( '/', authenticated )

module.exports = router;
