let wordBank = [
  "The God Father",
  "Scarface",
  "Avatar",
  "The Goonies",
  "Halloween"
];

let keysPressed = [];
//sort keys for speed
let sortedKeys = keysPressed.slice().sort();
//results of forloop

//find key pressed
//display key pressed
document.addEventListener("keydown", findLetter);

function findLetter(event) {
  let alphabet = event.keyCode;
  //if letter matches keyCodes for alphabet show on screen else dont
  if ((alphabet > 64 && alphabet < 91) || (alphabet > 96 && alphabet < 123)) { 
    for (let i = 0; sortedKeys.length - 1; i++) {
      if (sortedKeys[i + 1] == sortedKeys[i]) {
        // letter.textContent += ` ${event.key}`;
        keysPressed.push(alphabet);
        console.log(keysPressed);
      
      }
    }
  } else {
    return alert("key has already been pressed");

  }
}

function chooseMovie(wordBank) {}

//check if key matches letters of a word
//if it matches show on spaces
//only have spaces for how many letters in word
//if person gets word right make a sound
//go to next word
//show letters you have already guessed

//stop key from being pressed twice
