const app = require("./src/app.js");


const PORT = process.env.PORT || 1111;

app.listen(PORT, () => {
  console.log("Listening on " + PORT);
});
