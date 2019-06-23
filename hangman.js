let wordBank = [
  "The God Father",
  "Scarface",
  "Avatar",
  "The Goonies",
  "Halloween"
];

let keysPressed = [];
let duplicatesArray = [];

document.addEventListener("keydown", findLetter);

function findLetter(event) {
  let alphabet = event.keyCode;

  keysPressed.push(alphabet);

  //sort keys for speed
  let sortedKeys = keysPressed.slice().sort();
  console.log("keys pressed" + keysPressed);
  console.log("sorted" + sortedKeys);
  // if letter matches keyCodes for alphabet show on screen else dont
  if ((alphabet > 64 && alphabet < 91) || (alphabet > 96 && alphabet < 123)) {
    for (let i = 0; i < sortedKeys.length - 1; i++) {
      if (sortedKeys[i + 1] == sortedKeys[i]) {
        duplicatesArray.push(sortedKeys[i]);
      } 
      // else if (duplicatesArray[i] > 0 && duplicatesArray[i] !== null) {
      //   console.log("duplicatesArray" + duplicatesArray);
      //   letter.textContent += ` ${event.key}`;
      // }
    }
    console.log("Res"+ duplicatesArray)
  }
}
// function chooseMovie(wordBank) {}

//check if key matches letters of a word
//if it matches show on spaces
//only have spaces for how many letters in word
//if person gets word right make a sound
//go to next word
//show letters you have already guessed

//stop key from being pressed twice
