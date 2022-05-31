const express = require("express");
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const port = process.env.PORT;
const userRouter = require("./routers/user");
require("./db/db");

const app = express();

app.use(express.json());
app.use(userRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});