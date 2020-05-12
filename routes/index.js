var router = require("express").Router();

// LOGIN
var login = require("./login");

router.use("/", login);

module.exports = router;
