const logOptions = ['warn', 'log', 'error', 'debug'];
const log = (message, obj, level) => {
  console[level]('*****************************');
  console[level]('LOGGED: ', message, obj ? obj : '');
  console[level]('*****************************');
}

const Logger = {
  log: (message, obj) => log(message, obj, 'log'),
  warn: (message, obj) => log(message, obj, 'warn'),
  debug: (message, obj) => log(message, obj, 'debug'),
  error: (message, obj) => log(message, obj, 'error'),
}
module.exports = { Logger };
