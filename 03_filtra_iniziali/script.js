/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filterByLetter(nameArray, letter){
    let filteredNames = [];
    for (let i = 0; i < nameArray.length; i++) {
        let firstLetter = nameArray[i][0];

    if (firstLetter === letter) {
    filteredNames.push(nameArray[i]);
      } 
    }
    return  filteredNames;
 }




    



// Invoca la funzione qui e stampa il risultato in console

console.log(filterByLetter(names, "A"));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]