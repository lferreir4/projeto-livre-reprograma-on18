const controller = require("../controllers/tsunnyController");
const express = require("express");

const router = express.Router();

router.get("/all", controller.all);
router.get("/:id", controller.findOne);

router.post("/create", controller.create);
router.put("/update/:id", controller.update);
router.patch("/update/:id", controller.updateById);
router.delete("/delete/:id", controller.remove);

module.exports = router;
