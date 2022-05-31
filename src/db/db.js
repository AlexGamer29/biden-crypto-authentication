const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URL,
  {
    keepAlive: true,
    keepAliveInitialDelay: 300000,
  },
  function (err) {
    if (err) return console.log("Error: ", err);
    console.log(
      "MongoDB Connection -- Ready state is:",
      mongoose.connection.readyState
    );
  }
);
