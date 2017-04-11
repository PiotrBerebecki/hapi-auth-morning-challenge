module.exports = {
  method: ['GET', 'POST'],
  path: '/restricted',
  config: {
    auth: 'simple'
  },
  handler: function (request, reply) {
    reply.view('secret');
  }
}
