// placeholder
const bcrypt = require('bcrypt');

const users = require('./../database/users');

module.exports = (user, callback) => {
  bcrypt.compare(user.password, users[user.username].password, (err, isValid) => {
    if (err) { return callback(err); }
    callback(null, isValid);
  });
};
