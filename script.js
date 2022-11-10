const prezzo_Km = 0.21;
let numero_Km = 0;
let eta = 0;
let costoBiglietto = 0;
let bigliettoscontato = 0;


//Richieste dei dati all'utente
eta = prompt("Inserisci la tua età: ");
console.log("L'età che hai inserito è: " + eta);
numero_Km = prompt("Inserisci i chilometri che dei percorrere in treno: ");
console.log("Il numero dei chilometri che vuoi percorrere è: " + numero_Km + "Km");

//Calcolo del prezzo base del biglietto del treno
costoBiglietto = prezzo_Km * numero_Km;
console.log("Il presso Base del biglietto è: " + costoBiglietto + "€");

//Calcolo degli sconti rispetto all'età
if(eta < 18){
    bigliettoscontato = costoBiglietto * 0.8;
    console.log("Il presso contato del biglietto è: " + bigliettoscontato + "€");
}else if(eta > 65){
    bigliettoscontato = costoBiglietto * 0.6;
    console.log("Il presso contato del biglietto è: " + bigliettoscontato + "€");
}