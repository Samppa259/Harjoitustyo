const express = require("express");
const router = express.Router();

const opintojaksoController = require("../controllers/opintojaksoController");

router.get("/", opintojaksoController.haeKaikki);
router.post("/", opintojaksoController.lisaa);
router.put("/:id", opintojaksoController.paivita);
router.delete("/:id", opintojaksoController.poista);

module.exports = router;