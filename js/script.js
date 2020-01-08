var cognomeUser = prompt('inserisci il tuo cognome');
console.log(cognomeUser);
var cognomi = ['merceds', 'renault', 'kia', 'rangerover', 'fiat'];
// cognomi.sort();
// console.log(cognomi);
cognomi.push(cognomeUser);
console.log(cognomi);
cognomi.sort();
for (var i = 0; i < cognomi.length; i++) {
  document.getElementById("lista").innerHTML += '<li>' + cognomi[i] +
  '</li>' ;
}
console.log(cognomi.indexOf(cognomeUser));
var posizione = cognomi.indexOf(cognomeUser);
document.getElementById("posizione").innerHTML = 'il tuo cognome si trova alla posizione : ' + posizione;





// Chiedi all’utente il cognome,
// inseriscilo in un array con altri cognomi,
// stampa la lista ordinata alfabeticamente (in html ul > li).
// Scrivi anche la posizione della lista in cui il nuovo utente si trova.
