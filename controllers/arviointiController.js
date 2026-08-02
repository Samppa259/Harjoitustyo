const arviointiModel = require("../models/arviointiModel");

const haeKaikki = (req, res) => {
    arviointiModel.haeKaikkiArvioinnit((err, results) => { // Tässä kutsutaan toisessa tiedostossa olevaa funktiota ja tulostetaan funktion tulokset. 
        if (err) {
            return res.status(500).json(err);  // Jos tulee error niin antaa error messagen
        }

        res.json(results);                      // Jos ei tule erroria, niin tulostaa funktion tulokset
    });
};

const lisaa = (req, res) => {
    arviointiModel.lisaaArviointi(req.body, (err, result) => { // Kutsuu funktiota ja antaa funktiolle käyttäjän antaman syötteen. Kun funktio on toteutunut niin callback kertoo onnistuiko käyttäjän syötteen lisäys tietokantaan.
        if (err) {
            return res.status(500).json(err); // Jos ei onnistunut niin antaa error messagen.
        }

        res.json({
            viesti: "Arviointi lisätty onnistuneesti!" // Jos onnistui niin kertoo että onnistui.
        });
    });
};



const paivita = (req, res) => {  // Kutsuu funktiota ja antaa funktiolle käyttäjän antaman id:een ja syötteen. Callback kertoo onnistuiko syötteiden lisäys. 
    arviointiModel.paivitaArviointi(
        req.params.id,
        req.body,
        (err, result) => {
            if (err) {
                return res.status(500).json(err); // Jos ei onnistunut niin antaa error messagen.
            }

            res.json({
                viesti: "Arviointi päivitetty onnistuneesti!" // Jos onnistui niin kertoo että onnistui.
            });
        }
    );
};


const poista = (req, res) => {
    arviointiModel.poistaArviointi(req.params.id, (err, result) => { // Kutsuu funktiota ja antaa sille käyttäjän antaman id:een. Callback kertoo että onnistuiko id:een lisäys.
        if (err) {
            return res.status(500).json(err);  // Jos ei onnistunut niin antaa error messagen.
        }

        res.json({
            viesti: "Arviointi poistettu onnistuneesti!" // Jos onnistui niin kertoo että onnistui.
        });
    });
};


module.exports = { // Jakaa funktiot, jotta toisessa tiedostossa voidaan käyttää niitä.
    haeKaikki, 
    lisaa, 
    paivita,
    poista
};