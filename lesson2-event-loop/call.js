const http = require("http");

const NUM_CALLS = 100;

for (let i = 0; i < NUM_CALLS; i++) {
  http.get("http://localhost:3001",(res) => {
    res.on('data', (data) => console.log(data.toString()))
  });
};
