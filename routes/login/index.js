var router = require("express").Router();

router.get("/", (req, res) => {
  res.render("login", { title: "Express" });
});

module.exports = router;
