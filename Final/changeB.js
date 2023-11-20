var bg = [
  "./assets/background.jpg",
  "./assets/background2.jpg",
  "./assets/background3.jpg",
];
document.querySelector("#bg1").addEventListener("click", function () {
  document.querySelector("#background_image img").src = bg[0];
});
document.querySelector("#bg2").addEventListener("click", function () {
  document.querySelector("#background_image img").src = bg[1];
});
document.querySelector("#bg3").addEventListener("click", function () {
  document.querySelector("#background_image img").src = bg[2];
});

let audio = document.getElementById("myaudio"),
  ctrl = document.getElementById("audio-control");

let pause = ctrl.innerHTML === "Pause music";

ctrl.onclick = () => {
  pause = ctrl.innerHTML === "Pause music";
  ctrl.innerHTML = pause ? "Play music" : "Pause music";

  let method = pause ? "pause" : "play";

  audio[method]();
  console.log(pause);
  return false;
};

let music = ["./assets/audio1.mp3", "./assets/audio2.mp3"],
  sourceAudio = document.getElementById("source-audio"),
  change = document.getElementById("audio-change");

change.onclick = () => {
  let one = change.innerHTML === "one";
  change.innerHTML = one ? "two" : "one";

  sourceAudio.src = one ? music[1] : music[0];
  audio.load();
  if (!pause) {
    audio.play();
    return false;
  }

  return false;
};
