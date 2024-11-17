import config from './config.js';
const audioPlayer = document.querySelector("#audioPlayer");
const youtubeIframe = document.querySelector("#youtubeIframe");
audioPlayer.setAttribute("src", config.audioUrl);

console.log(audioPlayer);

function resetAudioPlayerUrl(url) {
    audioPlayer.setAttribute("src", url);
}

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

function resetYoutubeUrl(url) {
    youtubeIframe.setAttribute("src", url);
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

document.querySelector("#customAudioPlayer").addEventListener('click', () => {
    let url = prompt("custom audio player url:");
    resetAudioPlayerUrl(url);
});

document.querySelector("#customYoutube").addEventListener('click', () => {
    let url = prompt("custom youtube url:");
    resetYoutubeUrl(url);
});


document.querySelector("#focus").addEventListener('click', () => {
    //alert(111);
    let iframe = document.querySelector("iframe");
    console.log(iframe);
    console.log(iframe.contentDocument);
    console.log(iframe.contentWindow.document);
});

