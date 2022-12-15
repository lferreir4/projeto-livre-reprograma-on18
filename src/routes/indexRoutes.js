const router = require("express").Router();

router.get("/", (req, res) => {
  res.send({
    version: "1.0",
    title: "One piece project",
    descrição: "Thousand Sunny sailing",
  });
});

module.exports = router;
