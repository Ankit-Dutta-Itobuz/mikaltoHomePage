const http = require("http");
const port = 9000;
const path = require("path");
const fs = require("fs");
const pathName = path.join(__dirname + "/data.json");
const data = JSON.parse(fs.readFileSync(pathName, "utf-8"));

http.createServer((req, res) => {
    try {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.end(JSON.stringify(data));
    } catch (err) {
      console.log(err);
    }
  }).listen(port, () => {
    console.log(`Listening to port: ${port} `);
  });