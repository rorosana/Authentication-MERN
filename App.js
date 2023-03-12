const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`SERVER FUNCIONANDO EN EL PUERTO ${PORT}`);
  //db();
});

module.exports = app;