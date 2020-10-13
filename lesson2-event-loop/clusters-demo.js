const cluster = require('cluster');
const http = require('http');

const WORKERS_AMOUNT = 6;

const numProcessCounter = {};

if (cluster.isMaster) {
  console.log(`Master process with pid ${process.pid} is running...`);
  for (let i = 0; i < WORKERS_AMOUNT; i++) {
    cluster.fork();
  }
  cluster.on('exit', () => console.log(`Worker with pid ${process.pid} died`));
} else {
  http.createServer((req, res) => {
    res.writeHead(200);
    numProcessCounter[process.pid] ? numProcessCounter[process.pid] += 1 : numProcessCounter[process.pid] = 1;
    console.log(`Worker with pid: ${process.pid} has ${numProcessCounter[process.pid]} handled requests`);
    res.end(`Worker with ${process.pid} handled request for the ${numProcessCounter[process.pid]} time `)
  }).listen(3001, /*'uncommentToTriggerErrorAndWorkersDie',*/() =>
    console.log(`Worker with pid ${process.pid} started`)
  );
}
