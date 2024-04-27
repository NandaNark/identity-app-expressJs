const express = require("express");
const app = express();
const pool = require("../database");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.get("/", function (req, res, next) {
  try {
    connection.query(
      "SELECT * FROM user ORDER BY id desc",
      function (err, rows) {
        if (err) {
          console.error(err);
          res.status(500);
        } else {
          res.status(200).send({
            user: rows,
          });
        }
      }
    );
  } catch (err) {
    console.error(err);
    res.status(500);
  }
});

router.post("/store", function (req, res, next) {
  const nama = req.body.nama;
  const kelamin = req.body.kelamin;
  const agama = req.body.agama;
  const email = req.body.email;
  const hobi = req.body.hobi;

  try {
    connection.query(
      "INSERT INTO user(nama, kelamin, agama, email, hobi) VALUES (?, ?, ?, ?)",
      [nama, kelamin, agama, email, hobi],
      function (err, result) {
        if (err) {
          console.error(err);
          res.status(500);
        } else {
          res.status(200).send({ message: "Data berhasil disimpan!" });
        }
      }
    );
  } catch (err) {
    console.error(err);
    res.status(500);
  }
});

router.delete("/:id", function (req, res, next) {
  try {
    connection.query(
      "DELETE FROM user WHERE id = ?",
      [req.params.id],
      function (err, result) {
        if (err) {
          console.error(err);
          res.status(500);
        } else {
          res.status(200).send({ message: "Data berhasil dihapus!" });
        }
      }
    );
  } catch (error) {
    console.error(err);
    res.status(500);
  }
});

router.put("/:id", function (req, res, next) {
  const nama = req.body.nama;
  const kelamin = req.body.kelamin;
  const agama = req.body.agama;
  const email = req.body.email;
  const hobi = req.body.hobi;

  try {
    connection.query(
      "UPDATE user SET nama = ?, kelamin = ?, agama = ?, email = ?, hobi = ?  WHERE id = ?",
      [nama, kelamin, agama, email, hobi, req.params.id],
      function (err, result) {
        if (err) {
          console.error(err);
          res.status(500);
        } else {
          res.status(200).send({ message: "Data berhasil diupdate!" });
          // res.redirect('/user');
        }
      }
    );
  } catch (err) {
    console.error(err);
    res.status(500);
  }
});

router.get("/:id", function (req, res, next) {
  try {
    connection.query(
      "SELECT * FROM user WHERE id = ?",
      [req.params.id],
      function (err, rows) {
        if (err) {
          console.error(err);
          res.status(500);
        } else {
          res.status(200).send({
            user: rows,
          });
        }
      }
    );
  } catch (err) {
    console.error(err);
    res.status(500);
  }
});

module.exports = router;
