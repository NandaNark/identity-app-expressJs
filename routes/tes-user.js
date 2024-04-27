// app.get("/form_mhsiswa", (req, res) => {
//    const id = req.query.id;

//    if (id === undefined) {
//      // list form
//      const sql = "SELECT * FROM form_mhsiswa";
//      db.query(sql, (err, result) => {
//        if (err) throw err;
//        res.json(result);
//      });
//    } else if (id > 0) {
//      // get one id
//      const sql = "SELECT * FROM form_mhsiswa WHERE nrp = " + id;
//      db.query(sql, (err, result) => {
//        if (err) throw err;
//        res.json(result[0]);
//      });
//    }
//  });

//  app.post("/form_mhsiswa", (req, res) => {
//    // save product
//    const {
//      nama,
//      nrp,
//      kelas,
//      kelamin,
//      agama,
//      tempat,
//      tgl_lahir,
//      alamat,
//      sd,
//      smp,
//      sma,
//      email,
//      homepage,
//      hobi,
//      interest,
//    } = req.body;

//    const sql = `INSERT INTO form_mhsiswa VALUES ('${nama}', '${nrp}', '${kelas}', '${kelamin}', '${agama}', '${tempat}', '${tgl_lahir}', '${alamat}', '${sd}', '${smp}', '${sma}', '${email}', '${homepage}', '${hobi}', '${interest}')`;

//    db.query(sql, (err, result) => {
//      if (err) throw err;
//      if (result.affectedRows === 1) {
//        res.json({ message: "success" });
//      } else {
//        res.json({ message: "gagal" });
//      }
//    });
//  });

//  app.put("/form_mhsiswa", (req, res) => {
//    // update product
//    const id = req.query.id;
//    const {
//      nama,
//      nrp,
//      kelas,
//      kelamin,
//      agama,
//      tempat,
//      tgl_lahir,
//      alamat,
//      sd,
//      smp,
//      sma,
//      email,
//      homepage,
//      hobi,
//      interest,
//    } = req.body;

//    const sql = `UPDATE form_mhsiswa SET nama = '${nama}', nrp = '${nrp}', kelas = '${kelas}', kelamin = '${kelamin}', agama = '${agama}', tempat = '${tempat}', tgl_lahir = '${tgl_lahir}', alamat = '${alamat}', sd = '${sd}', smp = '${smp}', sma = '${sma}', email = '${email}', homepage = '${homepage}', hobi = '${hobi}', ineterest = '${interest}' WHERE nrp = '${id}'`;

//    db.query(sql, (err, result) => {
//      if (err) throw err;
//      if (result.affectedRows === 1) {
//        res.json({ message: "success" });
//      } else {
//        res.json({ message: "gagal" });
//      }
//    });
//  });

//  app.delete("/form_mhsiswa", (req, res) => {
//    // delete product
//    const id = req.query.id;
//    const sql = `DELETE FROM form_mhsiswa WHERE nrp = '${id}'`;

//    db.query(sql, (err, result) => {
//      if (err) throw err;
//      if (result.affectedRows === 1) {
//        res.json({ message: "success" });
//      } else {
//        res.json({ message: "gagal" });
//      }
//    });
//  });

//  app.listen(port, () => {
//    console.log(`Server running on http://localhost:${port}`);
//  });
