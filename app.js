const express = require("express");
const mongoose = require("mongoose");
const { mongoServerAddress } = require("./utils/config");

const app = express();
const { PORT = 3001 } = process.env;

mongoose.connect(mongoServerAddress);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
