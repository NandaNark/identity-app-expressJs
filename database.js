const { Pool } = require("mysql");

const pool = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "test_identitas",
});

module.exports = pool;
