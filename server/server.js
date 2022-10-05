const cors = require("cors");
const express = require("express");
const connectionMongo = require("./configuration/db"); //link to Database

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
  console.log(`Listening to ${PORT}`);
  connectionMongo();
});
