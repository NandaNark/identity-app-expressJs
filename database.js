const { Pool } = require("mysql");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "IdentityApp",
  password: "flower240504",
  port: 5432,
});

module.exports = pool;
