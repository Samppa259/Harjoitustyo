const db = require("./db"); // luo yhteyden tietokantaan

const haeKaikkiJaksot = (callback) => {  
    db.query("SELECT * FROM opintojakso", callback); // Funktio ajaa ton koodin tuolla tietokannassa ja tallentaa vastauksen callback muuttujaan.
};
const lisaaJakso = (Jakso, callback) => {  // Funktio tallentaa Jakso muttujaan käyttäjän syötteen ja callback tarkistaa onnistuiko syötteen sijoittaminen tietokantaan.
    const sql = `
        INSERT INTO opintojakso (Koodi, Laajuus, Nimi)
        VALUES (?, ?, ?)   `;   // Alla olevat arvot sijoitetaan kysymys merkkien paikalle.
  

    db.query(sql, [
        Jakso.Koodi,
        Jakso.Laajuus,
        Jakso.Nimi
    ], callback);
};

const paivitaJakso = (id, Jakso, callback) => {  // Funktio tallentaa käyttäjän antaman id:een(id muuttujaan) ja syötteen(Jakso muuttujaan). Callback tarkistaa että onnistuiko syötteen sijoittaminen tietokantaan.
    const sql = `
        UPDATE opintojakso
        SET Koodi = ?, Laajuus = ?, Nimi = ? // Alla olevat tiedot tulee kysymys merkkien paikalle.
        WHERE idOpintojakso = ? `;

    db.query(sql, [
        Jakso.Koodi,
        Jakso.Laajuus,
        Jakso.Nimi,
        id
    ], callback);
};
    
const poistaJakso= (id, callback) => {   // Ottaa vastaan käyttäjän antaman id:een ja sitten callback tarkistaa, että onnistuiko syötteen sijoittaminen tietokantaan.
    const sql = "DELETE FROM opintojakso WHERE idOpintojakso = ?";

    db.query(sql, [id], callback);
};



module.exports = {
    haeKaikkiJaksot, // Jakaa funktiot, jotta toisessa tiedostossa voidaan käyttää niitä.
    lisaaJakso,
    paivitaJakso, 
    poistaJakso
};