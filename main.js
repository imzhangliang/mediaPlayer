import config from './config.js';
const audioPlayer = document.querySelector("#audioPlayer");
audioPlayer.setAttribute("src", config.audioUrl);

console.log(audioPlayer);

function togglePlayPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
}

function rewind(seconds) {
    audioPlayer.currentTime = Math.max(0, audioPlayer.currentTime - seconds);
}

function forward(seconds) {
    audioPlayer.currentTime = Math.max(0, audioPlayer.currentTime + seconds);
}

document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.code === 'KeyP') {
        event.preventDefault();
        togglePlayPause();
    } else if (event.ctrlKey && event.code === 'KeyB') {
        event.preventDefault();
        rewind(5);
    } else if (event.ctrlKey && event.code === 'KeyF') {
        event.preventDefault();
        forward(5);
    }
});
