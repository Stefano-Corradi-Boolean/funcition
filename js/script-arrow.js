
const btn = document.getElementById('btn');

console.log(sommaTadizionale(5, 7));

// l'arrow funct senza le graffe (su una sola riga) ha i return implicto
// per essere invocata è necessario dichiararla prima
const somma = (numA, numB) => numA + numB;

console.log(somma(5, 7));
function sommaTadizionale(numA, numB){
    return numA + numB
}

btn.addEventListener('click', function(){
  console.log('sono in una function',this);
})

btn.addEventListener('click', () => console.log('sono in una arrow function',this))


// con return
// const getRandomNumber = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// con return implicito
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);


console.log(getRandomNumber(10,20));

const calcola = (numA, numB, operazione) => {
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

console.log(calcola(10,5,'moltiplicazione'));

