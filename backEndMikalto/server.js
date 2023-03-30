const http = require("http");
const path = require("path");
const fsp = require("fs/promises");
const fs = require("fs");
const port = 3100;

const pathName = path.join(__dirname + "/data.json");
const data = JSON.parse(fs.readFileSync(pathName, "utf-8"));

http
  .createServer((req, res) => {
    try {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Headers", "*");
      const formData = [];
    req.on("data", (formBucket) => {
      formData.push(formBucket);
    });
    req.on("end", () => {
      console.log(Buffer.concat(formData).toString());
    
      let formdata = Buffer.concat(formData).toString();

      let saveData = async() => {
        console.log(formdata);
        let currentData = await fsp.writeFile("./form.txt", formData);
        let formDataNew = formData + ";" + currentData;
        await fsp.writeFile("./form.txt", formDataNew);
      }
saveData();
    })
      res.end(JSON.stringify(data));
    } catch (err) {
      console.log(err);
    }
  })
  .listen(port, () => {
    console.log(`Listening to port: ${port} `);
  });
