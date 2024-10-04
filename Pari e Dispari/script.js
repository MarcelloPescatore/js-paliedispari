// console.log('test');

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.


// tools
// - Function
// - confirm
// - condition
// - variabili
// - prompt

// L'utente sceglie pari o dispari
let userChoice = confirm('Clicca un tasto, per scegliere tra pari o dispari! \nOK = Pari \nAnnulla = Dispari');
// stampiamo la scelta
if (userChoice){
    console.log("L'utente ha scelto pari");
} else {
    console.log("L'utente ha scelto dispari");
}

// L'utente inserisce un numero da 1 a 5
let userNumber = Number(prompt('Ora inserisci un numero da 1 a 5'));
// validiamo il numero e stampiamo un messaggio di conferma in console
if (userNumber <= 5 && userNumber >= 1 && !isNaN(userNumber) ){
    console.log(`Il numero dell'utente: ${userNumber}`);
    
    // Creiamo una funzione per generare un numero random per il pc 
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    // Richiamiamo la funzione 
    let computerNumber = getRndInteger(1,5);
    // Stampiamo il risultato in console 
    console.log(`Il numero del computer: ${computerNumber}`);
    
    // sommiamo i due numeri 
    const sum = userNumber + computerNumber
    console.log(`La somma dei due numeri: ${sum}`);
    
    // creiamo una funzione per stabilire se la somma è pari o dispari
    function isEven(number){
        return number % 2 === 0;
    }
    // Richiamo la funzione
    let resultIsEven = isEven(sum);
    // Stampo il risultato in console 
    if (resultIsEven){
        console.log("La somma è pari");
    } else {
        console.log("La somma è dispari");
        
    }
    
    // Decretiamo il vincitore
    if (resultIsEven === userChoice){
        console.log("Il vincitore è l'utente");
    } else {
        console.log("Il vincitore è il computer");
    }

}  else {
    alert('Il numero inserito non è valido. Inserisci un numero da 1 a 5.');
    console.log(`Il numero ${userNumber} non è valido`);
}
