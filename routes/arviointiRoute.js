const express = require("express");      // Tuo express kirjaston käytettäväksi
const router = express.Router();         // Ohjaa http pyynnöt oikeisiin funktioihin.

const arviointiController = require("../controllers/arviointiController");  // Lataa tiedoston, jotta sen funktioita voidaan käyttää.

router.get("/", arviointiController.haeKaikki);           // Käsittelee get pyynnön, joka on lähetetty /arviointi osoitteeseen. Osoite on määritelty app.js tiedostossa.
router.post("/", arviointiController.lisaa);              // Käsittelee post pyynnön, joka on lähetetty /arviointi osoitteeseen. Osoite on määritelty app.js tiedostossa.
router.put("/:id", arviointiController.paivita);          // Käsittelee put pyynnön, joka on lähetetty /arviointi osoitteeseen ja vastaanottaa myös käyttäjän antaman id:een. Osoite on määritelty app.js tiedostossa.
router.delete("/:id", arviointiController.poista);        // Käsittelee delete pyynnön, joka on lähetetty /arviointi osoitteeseen ja vastaanottaa myös käyttäjän antaman id:een. Osoite on määritelty app.js tiedostossa.



module.exports = router;   // Jakaa ton routerin, jotta toisessa tiedostossa voidaan käyttää sitä.