const http = require('http');
const { blockingLoop } = require('./utils/helpers');

http.createServer((req, res) => {
  res.writeHead(200);

  res.end(`hello world`);
}).listen(3001, () => {
  const start = new Date();
  setTimeout(() => {console.log("I want to print something but blockingLoop blocks me")})
  blockingLoop(100);
  console.log('Finished in: ', new Date() - start);
  console.log('Server started')
});
