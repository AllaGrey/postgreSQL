require("dotenv").config();
const { PORT } = process.env;

const app = require("./app");


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
  });