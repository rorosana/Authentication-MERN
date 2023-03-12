const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const controllers = require("./controllers");

app.get("/user", controllers.getUserById);
app.post("/register", controllers.register);
app.post("/login", controllers.login);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`SERVER FUNCIONANDO EN EL PUERTO ${PORT}`);
  //db();
});

module.exports = app;