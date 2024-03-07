
const output = document.getElementById('output');
const output2 = document.getElementById('output2');
const output3 = document.getElementById('output3');


saluto();

// invoco la funzioone salutoDinamico passando come parametro una stringa
salutoDinamico('Ciao!!!!!!!!!!')
salutoDinamico('qualcosa di diverso')

const mioSaluto = 'Ciao Mondo!'
// invoco la funzioone salutoDinamico passando come parametro una variabile
salutoDinamico(mioSaluto)
salutoDinamico(1)

const user = [
  'giuseppe',
  'verdi'
]

salutoDinamico('ciao ' +user[0] + ' ' + user[1] + '!');

somma(5, 7);
somma(3, 2);
somma(45, 2);
somma(3, 26);
somma(3, 32);
somma(12, 2);



let sommaCalcolata =  calcolaSomma(5,3);
let altraSommaCalcolata =  calcolaSomma(1,10);
console.log(sommaCalcolata);
console.log(altraSommaCalcolata);

console.log(getRandomNumber(1,10));
console.log(getRandomNumber(20,20));
console.log(getRandomNumber(100,1000));
const numRandom = getRandomNumber(1,10);
console.log('numRandom', numRandom);

const miaSomma = calcola(5,2,'somma');
const miaSottrazione = calcola(5,2,'sottrazione');
const miaDivisione = calcola(5,2,'divisione');
const miaMoltiplicazione = calcola(5,2,'moltiplicazione');
const miaOperazioneSbagliata = calcola(5,2,'ciao');
console.log(miaSomma, miaSottrazione, miaDivisione, miaMoltiplicazione, miaOperazioneSbagliata);


/// FUNCTIONS /////////////
function saluto(){
  console.log('ciao');
}

function salutoDinamico(salutoString){
  console.log('sono in salutoDinamico',salutoString)
  output.innerHTML += ' - ' + salutoString;
}

/**
 * Somma due numeri e li stampa
 * @param {number} numA 
 * @param {number} numB 
 */
function somma(numA, numB){
  output2.innerHTML += numA + numB;
  output2.innerHTML += ' - ';
}

function calcolaSomma(numA, numB){
  // restituisco un valore all'esterno
  return numA + numB
}

/**
 * Estrae un numero random ricevendo un minimo e un massimmo
 * @param {number} min 
 * @param {number} max 
 * @returns number
 */
function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Esegue le quattro operazioni
 * @param {number} numA 
 * @param {number} numB 
 * @param {string} operazione 
 * @returns 
 */
function calcola(numA, numB, operazione){
  let risulatato;
  if(operazione === 'somma'){
    risulatato = numA + numB
  }else if(operazione === 'sottrazione'){
    risulatato = numA - numB
  }else if(operazione === 'divisione'){
    risulatato = numA / numB
  }else if(operazione === 'moltiplicazione'){
    risulatato = numA * numB
  }else{
    risulatato = null
  }
  return risulatato;
}

//console.log(mioSaluto);
//console.log(salutoString); Error!

// operatore REST

console.log('----------------------------');
miaFunzioneConRest('ugo', 30, 'Via dei platani', 3479876543)
miaFunzioneConRest('pino', 20)

// posso passare alla funzione degli argomeni opzionali che verranno messi in una array
function miaFunzioneConRest(name, age, ...args){
  console.log(name);
  console.log(age);
  
  // gli argomenti opzionali vengono inseriti in questo array che di defaul è vuoto
  console.log(args);
  if(args.length > 0){
    console.log(args[0]);
  }
}

