function changeName(newName) {
  document.getElementById("nameOpening").innerHTML= newName;
  document.getElementById("nameOneScreen").innerHTML = newName;
  document.getElementById("nameTwoScreen").innerHTML = newName;
  document.getElementById("nameOneEnd").innerHTML = newName;
  document.getElementById("nameTwoEnd").innerHTML = newName;
};

let storyOpening = document.querySelector('.story-opening');
let optionOneScreen = document.querySelector('.option-one-screen');
let optionTwoScreen = document.querySelector('.option-two-screen');
let optionOneEnd = document.querySelector('.option-one-end');
let optionTwoEnd = document.querySelector('.option-two-end');
let nameInput = document.querySelector('.name-input');

document.querySelector('.option-one').onclick = function() {
  let name = document.querySelector('.bar').value;
  document.getElementById('nameOpening').innerHTML = name;
  document.getElementById('nameOneScreen').innerHTML = name;
  document.querySelector('.bar').style.display = 'none';
  document.querySelector('.option-one').style.display = 'none';
  document.querySelector('.option-two').style.display = 'none';
  storyOpening.style.display = 'none';
  optionOneScreen.style.display = 'block';
  nameInput.classList.add('hidden');
};

document.querySelector('.option-two').onclick = function() {
  let name = document.querySelector('.bar').value;
  document.getElementById('nameOpening').innerHTML = name;
  document.getElementById('nameTwoScreen').innerHTML = name;
  document.querySelector('.bar').style.display = 'none';
  document.querySelector('.option-one').style.display = 'none';
  document.querySelector('.option-two').style.display = 'none';
  storyOpening.style.display = 'none';
  optionTwoScreen.style.display = 'block';
  nameInput.classList.add('hidden');
};

document.querySelector('.option-one-screen button').onclick = function() {
  optionOneScreen.style.display = 'none';
  optionOneEnd.style.display = 'block';
};

document.querySelector('.option-two-screen button').onclick = function() {
  optionTwoScreen.style.display = 'none';
  optionTwoEnd.style.display = 'block';
};
