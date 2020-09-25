const { config } = require('./modules/config');
const { Logger } = require('./modules/logger');
const http = require('http');

const port = config.PORT;

http.createServer((req, res) => {
  Logger.log('Hello world');
  res.writeHeader(200, { 'Content-type': 'application/json' });
  res.end(JSON.stringify({ message: 'Hello world! '}));
}).listen(port, () => Logger.warn(`Listening on port ${port}...`));

Logger.debug('App args are', config.ARGS);
Logger.debug('App envs are', config.ENVS);
