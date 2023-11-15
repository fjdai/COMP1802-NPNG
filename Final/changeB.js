var bg = ['./assets/background.jpg', 'https://th.bing.com/th/id/OIP.Bxe5ES-Sl_mkg19J4SLCZAHaEo?w=288&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', 'https://t3.ftcdn.net/jpg/05/68/58/98/360_F_568589845_lWhcXz7Plm0ubhWjdGe1vU3Z6ZNwqR98.jpg']
document.querySelector("#bg1").addEventListener("click", function () {
    document.querySelector("#background_image img").src = bg[0];
})
document.querySelector("#bg2").addEventListener("click", function () {
    document.querySelector("#background_image img").src = bg[1];
})
document.querySelector("#bg3").addEventListener("click", function () {
    document.querySelector("#background_image img").src = bg[2];
})

let audio = document.getElementById('myaudio'),
    ctrl = document.getElementById('audio-control');


let pause = ctrl.innerHTML === 'Pause music';

ctrl.onclick = () => {
    pause = ctrl.innerHTML === 'Pause music';
    ctrl.innerHTML = pause ? 'Play music' : 'Pause music';

    let method = pause ? 'pause' : 'play';

    audio[method]();
    console.log(pause);
    return false;
};

let music = ["./assets/audio1.mp3", "./assets/audio2.mp3"],
    sourceAudio = document.getElementById('source-audio'),
    change = document.getElementById('audio-change');

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
}
