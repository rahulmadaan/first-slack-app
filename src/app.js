const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const sayHello = function(req, res) {
  const name = req.body.text;

  res.send({
    text: `Hello ${name}`,
    attachments: [
      {
        text: `Nice to meet you ${name}`
      }
    ]
  });
  res.end();
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post("/", sayHello);

module.exports = app;
