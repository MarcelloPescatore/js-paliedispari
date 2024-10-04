// console.log('test');

// Palidroma
// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

// tools :
// - variabili
// - function
// - condition

// Creo variabili
let askWord = prompt('inserisci parola');

// Creo la Function
function checkWord (askWord){
    // inverto la parola inserita
    let askWordInversa = askWord.split('').reverse().join('');

    // verifico se è palindroma
    if (askWordInversa === askWord){
        return 'La parola è palindroma'
    } else {
        return 'La parola non è palindroma'
    }
};

// Chiamo la funzione e memorizzo il risultato 
let result = checkWord(askWord);

// Stampo il risultato
console.log(result);


