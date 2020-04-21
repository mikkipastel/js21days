(() => {
  // เริ่มเขียนโค้ด
  const audioElement = document.querySelector('audio');
  const playButtonElement = document.querySelector('.play');
  const progressBarElement = document.querySelector('.progress-bar');
  const startTimeElement = document.querySelector('.start-time');
  const endTimeElement = document.querySelector('.end-time');

  function onClick() {
    if (audioElement.paused) {
      audioElement.play();
      playButtonElement.className = 'pause';
    } else {
      audioElement.pause();
      playButtonElement.className = 'play';
    }
  }

  function getDuration(time) {
    const minutes = Math.floor(time / 60 % 60).toString();
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');

    return `${minutes}:${seconds}`;
  }

  function onTimeUpdate() {
    startTimeElement.innerHTML = getDuration(audioElement.currentTime);
    progressBarElement.value = audioElement.currentTime;
  }

  function onLoadedData() {
    endTimeElement.innerHTML = getDuration(audioElement.duration);
    progressBarElement.max = audioElement.duration;
  }

  function onInput() {
    audioElement.currentTime = progressBarElement.value;
  }

  function onEnded() {
    playButtonElement.className = 'play';
    audioElement.currentTime = 0;
  }

  function run() {
    playButtonElement.addEventListener('click', onClick);

    audioElement.addEventListener('timeupdate', onTimeUpdate);
    audioElement.addEventListener('loadeddata', onLoadedData);
    audioElement.addEventListener('ended', onEnded);

    progressBarElement.addEventListener('input', onInput);
  }

  run();

})();
