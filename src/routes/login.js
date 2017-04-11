module.exports = {
  method: 'GET',
  path: '/',
  config: {
    auth: 'simple'
  },
  handler: function (request, reply) {
    reply.view('login');
  }
}
