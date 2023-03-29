const http = require("http");
const path = require("path");
const fs = require("fs");
const port = 3800;

const pathName = path.join(__dirname + "/data.json");
const data = JSON.parse(fs.readFileSync(pathName, "utf-8"));

http
  .createServer((req, res) => {
    try {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.end(JSON.stringify(data));
    } catch (err) {
      console.log(err);
    }
  })
  .listen(port, () => {
    console.log(`Listening to port: ${port} `);
  });
