const keys = document.querySelectorAll(".key");

keys.forEach((key) => {
  key.addEventListener("click", () => playNote(key));
});

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.currentTime = 0;
  noteAudio.play();
  key.classList.add("active");

  noteAudio.addEventListener("ended", () => {
    key.classList.remove("active");
  });
}

const WHITE_KEYS = ["1", "2", "3", "4", "5", "6", "7"];
const BLACK_KEYS = ["a", "s", "d", "f", "g"];
const RED_KEYS = ["8", "9"]
const BLUE_KEYS = ["h"]

const whiteKeys = document.querySelectorAll(".key.white");
const blackKeys = document.querySelectorAll(".key.black");
const redKeys = document.querySelectorAll(".key.red");
const blueKeys = document.querySelectorAll(".key.blue");

document.addEventListener("keydown", (e) => {
  // If the key is being held down, don't play the note again
  if (e.repeat) {
    return;
  }
  // Get the key that triggered the event
  const key = e.key;
  const whiteKeyIndex = WHITE_KEYS.indexOf(key);
  const blackKeyIndex = BLACK_KEYS.indexOf(key);
  const redKeyIndex = RED_KEYS.indexOf(key);
  const blueKeyIndex = BLUE_KEYS.indexOf(key);

  if (whiteKeyIndex > -1) {
    playNote(whiteKeys[whiteKeyIndex]);
  }

  if (blackKeyIndex > -1) {
    playNote(blackKeys[blackKeyIndex]);
  }

  if (redKeyIndex > -1){
    playNote(redKeys[redKeyIndex]);
  }

  if (blueKeyIndex > -1){
    playNote(blueKeys[blueKeyIndex]);
  }
});
