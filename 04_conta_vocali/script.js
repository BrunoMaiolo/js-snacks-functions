/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function countVowels(word) {
    let count = 0;
    let vowels = "aeiou";
    for (let i = 0; i < word.length; i++){
        let letter = word[i];
        if (vowels.includes(letter)) {
            count++;
        }

    }
}

// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'javascript': 3 (a, a, i)