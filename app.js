const express = require("express");     // Tuo express kirjaston
const db = require("./models/db");      // Luo yhteyden tietokantaan
const app = express();                  // Luo uuden express sovelluksen
const opiskelijaRoute = require("./routes/opiskelijaRoute");  // Tuo opiskelijaRoute tiedoston.
const opintojaksoRoute = require("./routes/opintojaksoRoute"); // Tuo opintojaksoRoute tiedoston.
const arviointiRoute = require("./routes/arviointiRoute");  // Tuo arvointiRoute tiedoston

app.use(express.json());            // Kertoo että express lukee json dataa
app.use("/arviointi", arviointiRoute);     // Ohjaa kaikki /arviointi pyynnöt arviointi routeen.
app.use("/opiskelijat", opiskelijaRoute);  // Ohjaa kaikki /opiskelijat pyynnöt opiskelija routeen.
app.use("/opintojakso", opintojaksoRoute); // Ohjaa kaikki /opintojakso pyynnöt opiskelija routeen.

app.get("/", (req, res) => {       // Lähettää viestin "toimii" tonne localhostiin, jotta voidaan kokeilla toimiiko palvelin.
    res.send("toimii!");
});

app.listen(3000, () => {     // Kuuntelee porttia ja kun palvelin käynnistyy, niin kertoo tonne konsoliin että palvelin on käynnissä.
    console.log("Palvelin käynnissä portissa 3000");
});