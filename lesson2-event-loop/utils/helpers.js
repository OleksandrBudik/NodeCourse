exports.blockingLoop = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        console.log(`i=${i} j=${j} k=${k} i*j*k = ${someTask(i, j, k)}`);
      }
    }
  }
};

const someTask = (i, j, k) => {
  return i * j * k;
}

exports.fib = (n) => {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let subResult = a + b;
    a = b;
    b = subResult;
  }
  return b;
}
