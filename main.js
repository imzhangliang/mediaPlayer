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
    if (url) {
        resetAudioPlayerUrl(url);
    }
});

function getUrlParams(url) {
    const params = {};
    const queryString = url.split("?")[1];
    if (!queryString) return params;
  
    const pairs = queryString.split("&");
  
    for (let pair of pairs) {
      if (!pair) continue;
      const [key, value] = pair.split("=");
      params[decodeURIComponent(key)] = decodeURIComponent(value || "");
    }
  
    return params;
}

document.querySelector("#customYoutube").addEventListener('click', () => {
    let url = prompt("Enter youtube url:");
    let vParam = getUrlParams(url).v;
    if (vParam) {
        let embedUrl = `https://www.youtube.com/embed/${vParam}`;
        console.log('embedUrl', embedUrl);
        resetYoutubeUrl(embedUrl);
    }
   
});


document.querySelector("#focus").addEventListener('click', () => {
    //alert(111);
    let iframe = document.querySelector("iframe");
    console.log(iframe);
    console.log(iframe.contentDocument);
    console.log(iframe.contentWindow.document);
});

