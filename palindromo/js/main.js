'use strict'
const word = prompt("inserisci una parola");
console.log(word);

function checkWord(array, element){
    for(let i = array.length -1; i >=0; i--){
        if(array[i] === element){
            return true;
        }
        return false;
    }
    
}
