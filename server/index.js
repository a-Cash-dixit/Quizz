const connectToMongo = require("./db");
const express = require("express");
const Cors = require("cors");
const router = express.Router();
quest = require("./quest");

connectToMongo();

const app = express();
const port = 8000;

app.use(express.json());
app.use(Cors());

app.use("/api", require("./routes/input"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Example app listen at http://localhost:${port}`);
});
