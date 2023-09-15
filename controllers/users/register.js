const uuid = require("uuid");
const db = require("../../db");
const { httpError, ctrlWrapper } = require("../../helpers");
const { createHashPassword } = require("../../units");

const register = async (req, res) => {
  // const verificationToken = uuid(); 

  const { email, password } = req.body;

  const {rows} = await db.query(
    `INSERT INTO person (email, password) values ($1, $2) RETURNING *`,
    [email, password]
  );
  console.log(rows);
  res.status(201).json(rows);
};

module.exports = {
  register: ctrlWrapper(register),
};
