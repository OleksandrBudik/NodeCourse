const {
  Worker,
  isMainThread,
  parentPort,
  workerData
} = require('worker_threads');
const { fib } = require('./utils/helpers');

if (isMainThread) {
  let value = process.argv.slice(2);
  let worker = new Worker(__filename, { workerData: { value }});
  worker.on('message', data => console.log(data));
} else {
  let fibonacciNumber = fib(workerData.value);
  parentPort.postMessage(fibonacciNumber);
}
