// Select digital clock box
  const hourOne = document.getElementById('hourOne');
  const hourTwo = document.getElementById('hourTwo');
  const minOne = document.getElementById('minOne');
  const minTwo = document.getElementById('minTwo');
  const secOne = document.getElementById('secOne');
  const secTwo = document.getElementById('secTwo');

// Show Current Time
  const secondHand = document.querySelector('.second');
  const minuteHand = document.querySelector('.minute');
  const hourHand = document.querySelector('.hour');

  function setTime(){
    let now, seconds, secondDegree, minutes, minuteDegree, hours, hourDegree;

    now = new Date();
    seconds = now.getSeconds();
    secondDegree = (seconds / 60)* 360 + 90;
    secondHand.style.transform = `rotate(${secondDegree}deg)`;

    minutes = now.getMinutes();
    minuteDegree = (minutes / 60)* 360 + 90;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;

    hours = now.getHours();
    if(minutes > 10 && minutes < 50){
      hourDegree = (hours / 12)* 360 + 90 + 15;
    }else{
      hourDegree = (hours / 12)* 360 + 90;
    }

    hourHand.style.transform = `rotate(${hourDegree}deg)`;

    // For digital display
    let secStr, minStr, hourStr;
    secStr = seconds + '';
    if(secStr.length == 1){
      secTwo.innerHTML = secStr;
      secOne.innerHTML = '0';
    }else{
      secTwo.innerHTML = secStr[1];
      secOne.innerHTML = secStr[0];
    }
    minStr = minutes + '';
    if(minStr.length == 1){
      minTwo.innerHTML = minStr;
      minOne.innerHTML = '0';
    }else{
      minTwo.innerHTML = minStr[1];
      minOne.innerHTML = minStr[0];
    }
    hourStr = hours + '';
    if(hourStr.length == 1){
      hourTwo.innerHTML = hourStr;
      hourOne.innerHTML = '0';
    }else{
      hourTwo.innerHTML = hourStr[1];
      hourOne.innerHTML = hourStr[0];
    }

  };
  setInterval(setTime,1000);

// Change clock colour
  const clock = document.querySelector('.clock');
  const digitalClock = document.querySelector('.digital');
  const colorBlocks = document.querySelectorAll('.block');
  const digitalBoxes = document.querySelectorAll('.box');

  colorBlocks.forEach(colorBlock => colorBlock.addEventListener('click',function(e){
    let colour = this.style.backgroundColor;
    clock.style.backgroundImage = `
    radial-gradient(
      ${colour},
      #ffffff
    )`;

    // Change background color of digital clock
    digitalBoxes.forEach(digitalBox=>digitalBox.style.backgroundColor = colour);

  }));

// Switch between analog and digital clock
  const clockSwitch = document.querySelector('.clock-switch');
  const inner = document.querySelector('.inner');

  clockSwitch.addEventListener('click',function(e){
    clock.classList.toggle('hide');
    digitalClock.classList.toggle('hide');

    if(inner.style.left != '50%'){
      inner.style.left = '50%';
    }else{
      inner.style.left = '0%';
    }

  });
