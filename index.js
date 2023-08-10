const express = require('express');
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get('/', (req, res) => {
  let title = "My Home Page";
  res.render("index", { "title": title });
  //res.send('Home Page');
});



app.listen(port, () => {
  console.log(`Example app listening on port 
  ${port}`);
});
