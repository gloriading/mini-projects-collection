let cardArr = ["star","moon","sun","dog","cat","bird","up","down","star","moon","sun","dog","cat","bird","up","down"];
const cardContents = document.querySelectorAll('.back');
const startBtn = document.getElementById('start');
const cards = document.querySelectorAll('.card');
const counterDisplay = document.querySelector('.counter');
const winModal = document.querySelector('.win-box');
const yesBtn = document.querySelector('.yes');
const noBtn = document.querySelector('.no');
let openedCards = [];
let counter = 0, winCounter = 0;

// when the game start:
// 1- shuffle the cards
// 2- restore the cards (cover the cards)
// 3- clear the array
// 4- clear the counter
startBtn.addEventListener('click', gameStart);

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function cardsRestore(){
  cards.forEach(function(card){
    card.classList.remove('flipped');
    card.classList.remove('disabled');
    card.classList.remove('match');
  });
  openedCards =[];
  counter = 0;
  counterDisplay.innerHTML = counter;
  winCounter = 0;
}

function gameStart(){
  cardsRestore();
  setTimeout(function(){
    let newCardSet = shuffle(cardArr);
    for(let i=0; i< cardContents.length; i++){
      // update contents
      cardContents[i].innerHTML = newCardSet[i];
      // update id
      cardContents[i].parentElement.id = newCardSet[i];
    }
  },300);
}


// Handle card flip

// cards.forEach(card=>card.addEventListener('click', displayCard));

cards.forEach(card=>card.addEventListener('click',function(e){
  displayCard(e.currentTarget);
  handleOpen(e.currentTarget);
}));

function displayCard(card){
  card.classList.toggle('flipped');
  card.classList.toggle('disabled');
}

// Handle matched/ unmatched

function handleOpen(card){
openedCards.push(card);
if( openedCards.length === 2 ){
  moveCount();
  if( openedCards[0].getAttribute("id") === openedCards[1].getAttribute("id")){
    matched();
    winCount();
    if(winCounter === 8){
      setTimeout(function(){
        showWin();
      },1000);
    }
  }else {
    notMached();
  }
}
}

function matched(){
// add a border to it
// prevent it from being clicked
// clear openedCards array
setTimeout(function(){
  openedCards[0].classList.add('match');
  openedCards[1].classList.add('match');
  openedCards = [];
},500);
}

function notMached(){
// all cards cannot be clicked
cards.forEach(function(card){
  card.classList.add('disabled');
});
setTimeout(function(){
  // flip the not-matched cards back after 1 sec
  openedCards[0].classList.remove('flipped');
  openedCards[1].classList.remove('flipped');
  // clear openedCards array
  openedCards = [];
  // all cards can be clicked again
  cards.forEach(function(card){
    card.classList.remove('disabled');
  });
},1000);

}

// keep track of number of moves
function moveCount(){
counter ++;
counterDisplay.innerHTML = counter;
}

// Handle Win
function winCount(){
winCounter ++;
}

function showWin(){
winModal.style.display = "block";
}

// Modal btn: yes to restart / no to do nothing
yesBtn.addEventListener('click', function(){
gameStart();
winModal.style.display = "none";
});

noBtn.addEventListener('click', function(){
winModal.style.display = "none";
});


window.onload = gameStart();
