const path = require("path");
const router = require("express").Router();
const bookRoute = require("./books");
const googleRoute = require("./google");

router.use("/books", bookRoute);


router.use("/google", googleRoute);

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
