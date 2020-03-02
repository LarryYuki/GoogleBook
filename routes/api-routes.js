const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/all", (req, res) => {
  db.Gbook.find().then(gbooks => {
    res.send(gbooks);
  });
});

router.get("/find/:id", (req, res) => {
  db.Gbook.find({ _id: req.params.id }).then(foundbooks => {
    res.send(foundbooks);
  });
});

router.post("/new", (req, res) => {
  db.Gbook.create({ text: req.body.text, complete: req.body.complete }).then(
    newBook => {
      res.send(newBook);
    }
  );
});

// router.patch("/update", (req, res) => {
//   db.Gbook.findOneAndUpdate(
//     { _id: req.query.id },
//     { text: req.query.text }
//   ).then(updatedTodo => {
//     res.send({ message: "success", todo: updatedTodo });
//   });
// });

router.delete("/delete/:id", (req, res) => {
  db.Gbook.deleteOne({ _id: req.params.id }).then(() => {
    res.send("success");
  });
});

module.exports = router;
