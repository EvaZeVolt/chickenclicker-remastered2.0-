let eggs = 0;
let Chicken = 1;
let Puncher = 0;
let Stabber = 0;
let Squeaser = 0;
let Prestige = 1;

let ChickenCost = Chicken * 7;
let PuncherCost = Puncher + 1 * 14;
let StabberCost = Stabber + 1 * 28;
let SqueaserCost = Squeaser + Prestige * 36;

const ChickenButton = document.getElementById('ChickenButton');

const PuncherButton = document.getElementById('PuncherButton');

const SqueaserButton = document.getElementById('SqueaserButton');

const StabberButton = document.getElementById('StabberButton');

const chickenElement = document.getElementById('chicken');
const countElement = document.getElementById('chickenCount');
const messageElement = document.getElementById('message');

var QuackAudio = new Audio('./Quack.mp3');

chickenElement.addEventListener('click', () => {
  eggs++;
  countElement.textContent = eggs;

  QuackAudio.play();
});

chickenElement.addEventListener('mouseover', () => {
  chickenElement.style.transform = 'scale(1.2)';
});
chickenElement.addEventListener('mouseout', () => {
  chickenElement.style.transform = 'scale(1)';
});

function buyChicken() {
  if (eggs >= ChickenCost) {
    eggs -= ChickenCost;
    Chicken++;
    countElement.textContent = eggs;
    return;
  } else {
    ChickenButton.style.backgroundColor = 'rgb(255,0,0)';
    setTimeout(resetColor(ChickenButton), 500000);
    return;
  }
}

function buyPuncher() {
  if (eggs >= PuncherCost) {
    eggs -= PuncherCost;
    Puncher++;
    countElement.textContent = eggs;
    return;
  } else {
    PuncherButton.style.backgroundColor = 'rgb(255,0,0)';
    setTimeout(resetColor(PuncherButton), 500000);
    return;
  }
}
function buySqueaser() {
  if (eggs >= SqueaserCost) {
    eggs -= SqueaserCost;
    Squeaser++;
    countElement.textContent = eggs;
  } else {
    SqueaserButton.style.backgroundColor = 'rgb(255,0,0)';
    setTimeout(resetColor(SqueaserButton), 500000);
  }
}

function buyStabber() {
  if (eggs >= StabberCost) {
    eggs -= StabberCost;
    Stabber++;
    countElement.textContent = eggs;
  } else {
    StabberButton.style.backgroundColor = 'rgb(255,0,0)';
    setTimeout(resetColor(StabberButton), 500000);
  }
}

function resetColor(button) {
  button.style.backgroundColor = 'rgb(255, 0, 0)';
  setTimeout(() => {
    button.style.backgroundColor = 'lightblue';
  }, 200);
}
function Save() {
  localStorage.setItem('eggs', eggs);
  localStorage.setItem('Chickens', Chicken);
  localStorage.setItem('Puncher', ChickenPuncher);
  localStorage.setItem('Stabber', ChickenStabber);
  localStorage.setItem('Squeaser', ChickenSqueaser);
  localStorage.setItem('Prestige', Prestige);
}
function Load() {
  eggs = localStorage.getItem('eggs');
  eggs = parseInt(eggs);
  Prestige = localStorage.getItem('Prestige');
  Prestige = parseInt(Prestige);

  Chicken = localStorage.getItem('Chickens');
  Chicken = parseInt(Chicken);
  Puncher = localStorage.getItem('Puncher');
  Puncher = parseInt(Puncher);
  Stabber = localStorage.getItem('Stabber');
  Stabber = parseInt(ChickenStabber);
  Squeaser = localStorage.getItem('Squeaser');
  Squeaser = parseInt(ChiSqueaserckenSqueaser);

  countElement.textContent = eggs;
}
