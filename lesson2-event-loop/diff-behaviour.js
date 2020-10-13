// need to run a few times. Sometimes it prints message after first cycle of the loop, sometimes after second and so on.

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
  blockingLoop(10);
  parentPort.postMessage('It prints message after different amount of calculations of blocking loop');
}
