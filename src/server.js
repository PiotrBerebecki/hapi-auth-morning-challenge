const Hapi = require('hapi');
const handlebars = require('handlebars');
const vision = require('vision');
const hapiAuthBasic = require('hapi-auth-basic');

const routes = require('./routes');

const basicValidate = require('../lib/validate');

var server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 4000
});

server.register([vision, hapiAuthBasic], function (err) {
  if (err) throw err;

  server.views({
    engines: { hbs: handlebars },
    path: 'views'
  });

  server.auth.strategy('simple', 'basic', { validateFunc: basicValidate });

  server.auth.default('simple'); // then you do not have to manually set it up on all routes

  server.route(routes);
});

module.exports = server;
