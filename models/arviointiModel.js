const db = require("./db");   // luo yhteyden tietokantaan

const haeKaikkiArvioinnit = (callback) => {
    db.query("SELECT * FROM arviointi", callback);  // Funktio ajaa ton koodin tuolla tietokannassa ja tallentaa vastauksen callback muuttujaan.
};

const lisaaArviointi = (Arviointi, callback) => {  // Funktio tallentaa arviointi muttujaan käyttäjän syötteen ja callback tarkistaa onnistuiko syötteen sijoittaminen tietokantaan.
    const sql = `
        INSERT INTO arviointi (Paivamaara, Arvosana, idOpiskelija, idOpintoJakso) 
        VALUES (?, ?, ?, ?)`;                     // Alla olevat arvot sijoitetaan kysymys merkkien paikalle.

    db.query(sql, [
        Arviointi.Paivamaara,
        Arviointi.Arvosana,
        Arviointi.idOpiskelija, 
        Arviointi.idOpintojakso
    ], callback);
};


const paivitaArviointi = (id, arviointi, callback) => { // Funktio tallentaa käyttäjän antaman id:een(id muuttujaan) ja syötteen(arviointi muuttujaan). Callback tarkistaa että onnistuiko syötteen sijoittaminen tietokantaan.
    const sql = `
        UPDATE arviointi
        SET Paivamaara = ?, Arvosana = ?, idOpiskelija = ?, idOpintojakso = ? // Alla olevat tiedot tulee kysymys merkkien paikalle.
        WHERE idArviointi = ?
    `;

    db.query(sql, [
        arviointi.Paivamaara,
        arviointi.Arvosana,
        arviointi.idOpiskelija,
        arviointi.idOpintojakso,
        id
    ], callback);
};

const poistaArviointi = (id, callback) => { // Ottaa vastaan käyttäjän antaman id:een ja sitten callback tarkistaa, että onnistuiko syötteen sijoittaminen tietokantaan.
    const sql = "DELETE FROM arviointi WHERE idArviointi = ?"; // Alla oleva id tulee kysymys merkin paikalle

    db.query(sql, [id], callback);
};


module.exports = {
    haeKaikkiArvioinnit,   // Jakaa funktiot, jotta toisessa tiedostossa voidaan käyttää niitä.
    lisaaArviointi, 
    paivitaArviointi,
    poistaArviointi
};