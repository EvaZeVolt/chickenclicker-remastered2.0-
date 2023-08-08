let eggs = 0;
let Chicken = 1;
let Puncher = 0;
let Stabber = 0;
let Squeaser = 0;
let Prestige = 1;
let MasterVolume = 0.5;

let ChickenCost = Chicken * 23;
let PuncherCost = Puncher + 1 * 42;
let StabberCost = Stabber + 1 * 108;
let SqueaserCost = Squeaser + 1 * 301;

const UpdateInterval = setInterval(update, 1000);
//const MusicInterval = setInterval(Music, 1000);

const ChickenButton = document.getElementById('ChickenButton');
const PuncherButton = document.getElementById('PuncherButton');
const SqueaserButton = document.getElementById('SqueaserButton');
const StabberButton = document.getElementById('StabberButton');

const GameSettingsDiv = document.getElementById('GameSetting');
const SettingDiv = document.getElementById('Settings');
const AboutDiv = document.getElementById('About');

const chickenElement = document.getElementById('chicken');
const countElement = document.getElementById('chickenCount');
const messageElement = document.getElementById('message');
var BuySoundChecked = true;
var BuyAudio = new Audio(
  'https://github.com/EvaZeVolt/chickenclicker-remastered2.0-/raw/main/audio/BuySound.mp3'
);
var BackgroundAudio = new Audio(
  'https://github.com/EvaZeVolt/chickenclicker-remastered2.0-/raw/main/audio/BackgroundAudio.mp3'
);

var QuackAudio = new Audio(
  'https://cdn.jsdelivr.net/gh/EvaZeVolt/chickenclicker-remastered2.0-@main/Quack.mp3'
);

//Game Loop
function clickedChicken() {
  eggs += Chicken;
  countElement.textContent = eggs;
  QuackAudio.volume = MasterVolume;
  QuackAudio.play();
}

function update() {
  eggs += (Puncher + Squeaser * 3 + Stabber * 6 + Squeaser * 13) * Prestige;
  countElement.textContent = eggs;

  //console.log(MasterVolume);
  // console.log(BackgroundVolume);
}

//Shop

function buyChicken() {
  if (eggs >= ChickenCost) {
    eggs -= ChickenCost;
    if (BuySoundChecked == true) BuyAudio.play();
    ChickenButton.style.backgroundColor = 'rgb(0,255,0)';
    setTimeout(resetColor(ChickenButton), 500000);

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
    if (BuySoundChecked == true) BuyAudio.play();
    PuncherButton.style.backgroundColor = 'rgb(0,255,0)';
    setTimeout(resetColor(PuncherButton), 500000);
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
    if (BuySoundChecked == true) BuyAudio.play();
    SqueaserButton.style.backgroundColor = 'rgb(0,255,0)';
    setTimeout(resetColor(SqueaserButton), 500000);
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
    if (BuySoundChecked == true) BuyAudio.play();
    StabberButton.style.backgroundColor = 'rgb(0,500,0)';
    setTimeout(resetColor(StabberButton), 500000);
    Stabber++;
    countElement.textContent = eggs;
  } else {
    StabberButton.style.backgroundColor = 'rgb(255,0,0)';
    setTimeout(resetColor(StabberButton), 500000);
  }
}

//Animation
chickenElement.addEventListener('mouseover', () => {
  chickenElement.style.transform = 'scale(1.2)';
});
chickenElement.addEventListener('mouseout', () => {
  chickenElement.style.transform = 'scale(1)';
});

//Right Side/ Settings

function openSettings() {
  SettingDiv.style.display = 'block';
  AboutDiv.style.display = 'none';
}
function openAbout() {
  AboutDiv.style.display = 'block';
  SettingDiv.style.display = 'none';
}

function Save() {
  localStorage.setItem('eggs', eggs);
  localStorage.setItem('Chickens', Chicken);
  localStorage.setItem('Puncher', Puncher);
  localStorage.setItem('Stabber', Stabber);
  localStorage.setItem('Squeaser', Squeaser);
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
  Stabber = parseInt(Stabber);
  Squeaser = localStorage.getItem('Squeaser');
  Squeaser = parseInt(Squeaser);

  countElement.textContent = eggs;
}

function BuySwitch() {
  if (BuySoundChecked == true) {
    BuySoundChecked = false;
  } else BuySoundChecked = true;

  if (BuySoundChecked) {
    document.getElementById('BuyButton').textContent = 'ON';
  }
  if (!BuySoundChecked) {
    document.getElementById('BuyButton').textContent = 'OFF';
  }
}

//Audio
function playAudio(audio) {
  setTimeout(() => {
    audio.play();
  }, 200);
}
function changeVolume(audio, volume) {
  audio.volume = volume;
}

//Useful Tools

function resetColor(button) {
  setTimeout(() => {
    button.style.backgroundColor = 'lightblue';
  }, 200);
}

// Other stuff

function Reset() {
  let confirmed = false;
  

  if (confirmed) {
    eggs = 0;
    Chicken = 1;
    Puncher = 0;
    Stabber = 0;
    Squeaser = 0;
    Prestige = 1;
  }
}
