const { config } = require('./modules/config');
const { Logger } = require('./modules/logger');
const http = require('http');

http.createServer((req, res) => {
  Logger.log('Hello world');
  res.writeHeader(200, { 'Content-type': 'application/json' });
  res.end(JSON.stringify({ message: 'Hello world! '}));
}).listen(config.PORT, () => Logger.warn(`Listening on port ${config.PORT}...`));

Logger.debug('App args are', config.ARGS);
Logger.debug('App envs are', config.ENVS);
