module.exports = {
  method: ['GET', 'POST'],
  path: '/home',
  config: {
    auth: 'simple'
  },
  // config: {
  //   auth: 'false' // do not apply strategy to allow everyone in
  // },
  handler: function (request, reply) {
    reply.view('home');
  }
}
