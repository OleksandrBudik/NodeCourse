const {
  Worker,
  parentPort,
  isMainThread
} = require('worker_threads');
const { blockingLoop } = require('./utils/helpers');

if (isMainThread) {
  const worker = new Worker(__filename);
  worker.on('message', (res) => setTimeout(() => {console.log(res)}));
} else {
  blockingLoop(100);
  parentPort.postMessage('I want to print something and blockingLoop doesn\'t block me');
}
