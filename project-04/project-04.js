// Switch
const methodA = document.getElementById('methodA');
const methodB = document.getElementById('methodB');
const methodAcontainer = document.querySelector('.method-a');
const methodBcontainer = document.querySelector('.method-b');
methodA.addEventListener('click',function(){
  this.classList.add('activated');
  methodAcontainer.classList.remove('hide');
  methodB.classList.remove('activated');
  methodBcontainer.classList.add('hide');
});
methodB.addEventListener('click',function(){
  this.classList.add('activated');
  methodBcontainer.classList.remove('hide');
  methodA.classList.remove('activated');
  methodAcontainer.classList.add('hide');
});

// JS to generate dice
const container = document.querySelector('.container');
const diceOne = document.createElement('div');
const diceTwo = document.createElement('div');
const diceThree = document.createElement('div');
const diceFour = document.createElement('div');
const diceFive = document.createElement('div');
const diceSix = document.createElement('div');
const blackDot = document.createElement('div');
blackDot.classList.add('dot');

diceOne.classList.add('square');
diceOne.classList.add('one');
diceOne.appendChild(blackDot.cloneNode(true));

diceTwo.classList.add('square');
diceTwo.classList.add('two');
for(let i=0; i<2;i++){
  diceTwo.appendChild(blackDot.cloneNode(true));
}

diceThree.classList.add('square');
diceThree.classList.add('three');
for(let i=0; i<3;i++){
  diceThree.appendChild(blackDot.cloneNode(true));
}

diceFour.classList.add('square');
diceFour.classList.add('four');
for(let i=0; i<4;i++){
  diceFour.appendChild(blackDot.cloneNode(true));
}

diceFive.classList.add('square');
diceFive.classList.add('five');
for(let i=0; i<5;i++){
  diceFive.appendChild(blackDot.cloneNode(true));
}

diceSix.classList.add('square');
diceSix.classList.add('six');
for(let i=0; i<6;i++){
  diceSix.appendChild(blackDot.cloneNode(true));
}
container.appendChild(diceOne.cloneNode(true));
container.appendChild(diceTwo.cloneNode(true));
container.appendChild(diceThree.cloneNode(true));
container.appendChild(diceFour.cloneNode(true));
container.appendChild(diceFive.cloneNode(true));
container.appendChild(diceSix.cloneNode(true));

// Dice Display One
const dice = document.querySelectorAll('.square');
const btn = document.querySelector('.choose');

btn.addEventListener('click',function(e){

dice.forEach(function(ele){
  ele.style.backgroundColor = 'white';
  ele.classList.remove('animated');
  ele.classList.remove('wobble');
});

setTimeout(function(){
  let index = Math.floor(( Math.random() * 6 ));
  dice[index].style.backgroundColor = 'deeppink';

  dice[index].classList.add('animated');
  dice[index].classList.add('wobble');
},100);

});
// method b -----------------------------------------

const btnB = document.querySelector('.choose-b');
const displayArea = document.querySelector('.container-b');

// Initial state
const emptyDice = document.createElement('div');
emptyDice.classList.add('square');
displayArea.appendChild(emptyDice);

btnB.addEventListener('click',function(){
  // Empty whatever it was there
  displayArea.innerHTML = '';
  setTimeout(function(){
    // Restore to initial State
    displayArea.appendChild(emptyDice);
    // Make emptyDice to roll
    emptyDice.classList.add('rolling-effect');
  },100);

  // Randomly delect a dice
  setTimeout(function(){
    displayArea.innerHTML = '';
    let index = Math.floor(( Math.random() * 6 ));
    let diceArr = [diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix];
    // Add animation and append to the display area
    diceArr[index].classList.add('animated');
    diceArr[index].classList.add('flipInX');
    displayArea.appendChild(diceArr[index].cloneNode(true));
  },3000);

});
