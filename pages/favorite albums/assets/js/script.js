<<<<<<< HEAD
let progress = document.getElementById("progress");
let song = document.getElementById("song");
let controlIcon = document.getElementById("control-icon");

song.onloadedmetadata = function() {
    progress.max = song.duration;
};

progress.value = song.currentTime;

controlIcon.onclick = playPause;

function playPause() {
    if (controlIcon.classList.contains("fa-pause")) {
        song.pause();
        controlIcon.classList.remove("fa-pause");
        controlIcon.classList.add("fa-play");
    } else {
        song.play();
        controlIcon.classList.remove("fa-play");
        controlIcon.classList.add("fa-pause");
    }
}

progress.onchange = function() {
    song.currentTime = progress.value;
    song.play();
    playPause();
};

setInterval(function() {
    if (!song.paused) {
        progress.value = song.currentTime;
    }
=======
let progress = document.getElementById("progress");
let song = document.getElementById("song");
let controlIcon = document.getElementById("control-icon");

song.onloadedmetadata = function() {
    progress.max = song.duration;
};

progress.value = song.currentTime;

controlIcon.onclick = playPause;

function playPause() {
    if (controlIcon.classList.contains("fa-pause")) {
        song.pause();
        controlIcon.classList.remove("fa-pause");
        controlIcon.classList.add("fa-play");
    } else {
        song.play();
        controlIcon.classList.remove("fa-play");
        controlIcon.classList.add("fa-pause");
    }
}

progress.onchange = function() {
    song.currentTime = progress.value;
    song.play();
    playPause();
};

setInterval(function() {
    if (!song.paused) {
        progress.value = song.currentTime;
    }
>>>>>>> 8b8e89aab0b36299bff3ee07c8d7ae9c061491ad
}, 500);