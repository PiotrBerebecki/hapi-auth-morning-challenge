module.exports = {
  method: ['GET', 'POST'],
  path: '/restricted',
  config: {
    auth: {
      strategy: 'simple',
      scope: 'admin' // can also be an array
    }
  },
  handler: function (request, reply) {
    reply.view('secret');
  }
}
