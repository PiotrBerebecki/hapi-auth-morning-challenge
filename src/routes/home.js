module.exports = {
  method: ['GET', 'POST'],
  path: '/home',
  config: {
    auth: 'simple'
  },
  handler: function (request, reply) {
    reply.view('home');
  }
}
