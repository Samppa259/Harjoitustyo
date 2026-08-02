const db = require("./db"); // luo yhteyden tietokantaan

const haeKaikkiOpiskelijat = (callback) => { // Funktio ajaa ton koodin tuolla tietokannassa ja tallentaa vastauksen callback muuttujaan.
    db.query("SELECT * FROM opiskelija", callback);
};

const lisaaOpiskelija = (opiskelija, callback) => { // Funktio tallentaa opiskelija muttujaan käyttäjän syötteen ja callback tarkistaa onnistuiko syötteen sijoittaminen tietokantaan.
    const sql = `
        INSERT INTO opiskelija (Etunimi, Sukunimi, Osoite, Luokkatunnus)
        VALUES (?, ?, ?, ?)      // Alla olevat arvot sijoitetaan kysymys merkkien paikalle.
    `;

    db.query(sql, [
        opiskelija.Etunimi,
        opiskelija.Sukunimi,
        opiskelija.Osoite,
        opiskelija.Luokkatunnus
    ], callback);
};

const paivitaOpiskelija = (id, opiskelija, callback) => { // Funktio tallentaa käyttäjän antaman id:een(id muuttujaan) ja syötteen(opiskelija muuttujaan). Callback tarkistaa että onnistuiko syötteen sijoittaminen tietokantaan.
    const sql = `
        UPDATE opiskelija
        SET Etunimi = ?, Sukunimi = ?, Osoite = ?, Luokkatunnus = ?    // Alla olevat tiedot tulee kysymys merkkien paikalle.
        WHERE idOpiskelija = ?
    `;

    db.query(sql, [
        opiskelija.Etunimi,
        opiskelija.Sukunimi,
        opiskelija.Osoite,
        opiskelija.Luokkatunnus,
        id
    ], callback);
};


const poistaOpiskelija = (id, callback) => {   // Ottaa vastaan käyttäjän antaman id:een ja sitten callback tarkistaa, että onnistuiko syötteen sijoittaminen tietokantaan.
    const sql = "DELETE FROM opiskelija WHERE idOpiskelija = ?";     // Alla oleva id tulee kysymys merkin paikalle

    db.query(sql, [id], callback);
};


module.exports = {
    haeKaikkiOpiskelijat,   // Jakaa funktiot, jotta toisessa tiedostossa voidaan käyttää niitä.
    lisaaOpiskelija, 
    paivitaOpiskelija,
    poistaOpiskelija
};