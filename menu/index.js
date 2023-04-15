let audio = document.getElementById('iframeAudio');

if (localStorage.getItem('audioTime') && localStorage.getItem('audioVolume')) {
    audio.currentTime = localStorage.getItem('audioTime');
    audio.volume = localStorage.getItem('audioVolume');
}

audio.addEventListener('timeupdate', function() {
    localStorage.setItem('audioTime', audio.currentTime);
});
audio.addEventListener('volumechange', function() {
    localStorage.setItem('audioVolume', audio.volume);
});