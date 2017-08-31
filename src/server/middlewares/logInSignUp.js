const logInSignUp = ( request, response, next ) => {
  const user = request.session.user;

  if (!user) {
    request.session.user = 'test';
    response.render('logInSignUp');
  } else if (user) {
    next();
  }
}

module.exports = logInSignUp;
