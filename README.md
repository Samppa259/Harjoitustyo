# Harjoitustyo

Tämä harjoitustyö toimii sillä tavalla, että model kansiosta db.js luo yhteyden serverille ja sen jälkeen muut models kansion tiedostot voivat lähettää dataansa serverille db tiedoston avulla.
Muissa model kansion tiedostoissa on funktiot, jotka lähettävät valmiiksi määritellyn koodin serverille, johon käyttäjän tarvitsee ainoastaan syöttää arvot.


Controllers tiedostot kutsuvat models tiedostojen funktioita ja antavat funktioille käyttäjän syöttämät arvot, jolloin models tiedostot syöttävät nämä arvot suoraan sql serverille. 
Models tiedoston funktiot palauttavat tiedon että joko arvojen lisäys onnistui sql serverille tai että se epäonnistui.

Routes tiedostot vastaanottavat sen osoitteen johon data lähetetään ja kutsuvat controllers tiedoston eri funktioita riippuen siitä minkä pyynnön käyttäjä lähettää(Esim jos käyttäjä lähettää delete pyynnön, niin route tiedosto kutsuu delete funktiota controller tiedostossa). 

app.js tiedosto katsoo että mihin osoitteeseen käyttäjä lähettää tietoa ja lähettää tämän tiedon eteenpäin routes tiedostoihin. app.js kertoo myös että palvelin on käynnissä, kun palvelimen käynnistää.
