const fromEntries = require('object.fromentries');

const argsArray = process.argv.slice(2);
const mapped = argsArray.map(argPair =>
  argPair.split('=')
    .map((item, index) => index ? item : item.slice(1))
);
const args = fromEntries(mapped);

const envsObj = process.env;
const appEnvsArr = Object.entries(envsObj).filter(item => item[0].startsWith('APP'));
const appEnvs = fromEntries(appEnvsArr);

const config = {
  ARGS: args,
  ENVS: appEnvs,
  PORT: appEnvs.APP_PORT || 3000
}

module.exports = { config };
