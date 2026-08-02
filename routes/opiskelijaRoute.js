const express = require("express");
const router = express.Router();

const opiskelijaController = require("../controllers/opiskelijaController");

router.get("/", opiskelijaController.haeKaikki);
router.post("/", opiskelijaController.lisaa);
router.put("/:id", opiskelijaController.paivita);
router.delete("/:id", opiskelijaController.poista);

module.exports = router;