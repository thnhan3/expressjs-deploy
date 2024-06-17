var express = require("express");
const { json } = require("stream/consumers");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/cats", async (req, res) => {
  res.json([
    {
      name: "Mimi",
      age: 1,
    },
    {
      name: "Doni",
      age: 2,
    },
  ]);
});

module.exports = router;
