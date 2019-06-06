let wordBank = [
  "The God Father",
  "Scarface",
  "Avatar",
  "The Goonies",
  "Halloween"
];
//find key pressed
//display key pressed
document.addEventListener("keydown", findLetter);

function findLetter(event) {
  let alphabet = event.keyCode;
  //if letter matches keyCodes for alphabet show on screen else dont
  if (
    (alphabet > 64 && alphabet < 91) ||
    (alphabet > 96 && alphabet < 123) ||
    alphabet == 8
  ) {
    letter.textContent += ` ${event.key}`;
  } else {
    return false;
  }
}

//stop key from being pressed twice
//check if key matches letters of a word
//if it matches show on spaces
//only have spaces for how many letters in word
//if person gets word right make a sound
//go to next word
