//.chiedo all'utente pari o dispari
const choice = prompt("scegli pari o dispari??")
//. chiedo all'utente di scegliere un numero tra 1 e 5
const userNumber = Number(prompt("Inserisci un numero da 1 a 5"));
console.log(userNumber);
//.creo una funzione per generare un numero randomico alla cpu
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
const cpuNumber = getRndInteger(1, 5);
console.log(cpuNumber);
//.sommo il totale della cpuNumber e userNumber
const sum = cpuNumber+userNumber;
console.log(sum);

//. stabilire se la somma pari o dispari
function oddOrEven(number){
if (number % 2 == 0){
return "pari";
    }else{
        return "dispari";
       
}
}
if(oddOrEven(sum) === choice){
  alert("Hai vinto")
}else{
  alert("Hai perso")
}