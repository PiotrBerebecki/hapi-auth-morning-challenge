// placeholder
const bcrypt = require('bcrypt');

const users = require('./../database/users');

module.exports = (request, username, password, callback) => {
  const dbUser = users[username];
  if (!dbUser) { return callback(null, false); }
  bcrypt.compare(password, dbUser.password, (err, isValid) => {
    if (err) { return callback(err); }

    const credentials = {
      username: username,
      id: dbUser.id,
      scope: dbUser.permissions
    };

    callback(null, isValid, credentials);

  });
};
