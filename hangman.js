
//find key pressed
//display key pressed
document.addEventListener('keydown', logKey);

function logKey(event) {
  letter.textContent += ` ${event.code}`;
}

//find key pressed
//display key pressed
//stop key from being pressed twice
//check if key matches letters of a word
//if it matches show on spaces
//only have spaces for how many letters in word
//if person gets word right make a sound
//go to next word
