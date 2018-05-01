const btn = document.getElementById('getColour');
const clearBtn = document.getElementById('clear');
const divs = document.querySelectorAll('.colour-box');
const chosenDivs = document.querySelectorAll('.chosen-box');
const copyBtns = document.querySelectorAll('.copy');
const copyNotices = document.querySelectorAll('.copied-notice');


function random(){
  let number;
  number = Math.floor( Math.random() * 255 );
  return number;
}

function randomOpacity(){
  let number;
  number = Math.random().toFixed(2);
  if(number < 0.2){
    number = Math.random().toFixed(2);
  }
  return number;
}

function colorGenerator(){
  let result;
  result = `rgba(${random()}, ${random()}, ${random()}, ${randomOpacity()})`;
  return result;
}

btn.addEventListener('click',function(){
  divs.forEach(function(div){
    let temp = colorGenerator();
    div.style.backgroundColor = temp;
    div.id = temp;
  });
});

// Choose colours
divs.forEach(function(div){
  div.addEventListener('click',function(e){
    let temp = this.getAttribute('id');
    if(temp !== null){
      for(let i=0; i < chosenDivs.length; i++){
        if(chosenDivs[i].id == false){
          chosenDivs[i].id = temp;
          chosenDivs[i].style.backgroundColor = temp;
          break;
        }
      }
      for(let i=0; i < copyBtns.length; i++){
        if(copyBtns[i].hasAttribute('data-clipboard-text') == false){
          copyBtns[i].setAttribute('data-clipboard-text', temp);
          break;
        }
      }
    }
  });
});

// Clear chosen colours
clearBtn.addEventListener('click',function(e){

  chosenDivs.forEach(function(chosenDiv){
      chosenDiv.removeAttribute('id');
      chosenDiv.removeAttribute('style');
  });

  copyBtns.forEach(function(copyBtn){
      copyBtn.removeAttribute('data-clipboard-text');
  });

  copyNotices.forEach(function(copyNotice){
    copyNotice.style.opacity = "0";
  });

});

// Handle copy ( clipboard.js )
var clipboard = new ClipboardJS('.copy');
clipboard.on('success', function(e) {
    // Show "copied" after copying
    e.trigger.nextElementSibling.style.opacity = "0.7";
});
clipboard.on('error', function(e) {
    console.log(e);
});
