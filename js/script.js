var cognomeUser = prompt('inserisci il tuo cognome');
console.log(cognomeUser);
var cognomi = ['merceds', 'renault', 'kia', 'rangerover', 'fiat'];
cognomi.sort();
console.log(cognomi);
document.getElementById("lista").innerHTML = cognomi;





// Chiedi all’utente il cognome,
// inseriscilo in un array con altri cognomi,
// stampa la lista ordinata alfabeticamente (in html ul > li).
// Scrivi anche la posizione della lista in cui il nuovo utente si trova.
