const mysql = require("mysql2"); // Tuo mysql2 kirjaston käytettäväksi

const connection = mysql.createConnection({ //Luo yhteyden serveriin
    host: "localhost",
    user: "root",
    password: "root",
    database: "arviointi"
});

connection.connect((err) => { // Jos err(error) on true, niin antaa error messagen. Muuten yhdistetty tietokantaan.
    if (err) {
        console.log(err);
    } else {
        console.log("Yhdistetty tietokantaan!");
    }
});

module.exports = connection;