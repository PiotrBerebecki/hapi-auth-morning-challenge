// placeholder
const bcrypt = require('bcrypt');

const users = require('./../database/users');

module.exports = (request, username, password, callback) => {
  if (!users[username]) { return callback(null, false); }
  bcrypt.compare(password, users[username].password, (err, isValid) => {
    if (err) { return callback(err); }

    callback(null, isValid);
  });
};
