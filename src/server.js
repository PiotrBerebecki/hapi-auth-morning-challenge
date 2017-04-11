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

  // Add an authentication strategy here
  server.auth.strategy('simple', 'basic', { validateFunc: basicValidate });

  server.route(routes);
});

module.exports = server;
