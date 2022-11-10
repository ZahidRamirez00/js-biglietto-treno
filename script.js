const prezzo_Km = 0.21;
let numero_Km = 0;
let eta = 0;
let costoBiglietto = 0;

//Richieste dei dati all'utente
eta = prompt("Inserisci la tua età: ");
numero_Km = prompt("Inserisci i chilometri che dei percorrere in treno: ");

//Calcolo del prezzo base del biglietto del treno
costoBiglietto = prezzo_Km * numero_Km;
console.log("Il presso Base del biglietto è: " + costoBiglietto);


