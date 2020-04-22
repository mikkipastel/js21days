(() => {
  // เริ่มเขียนโค้ด
  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new window.SpeechRecognition();
  const buttonElement = document.querySelector('.control');

  function onResult(event) {
    const textElement = document.querySelector('.text');
    const { transcript } = event.results[0][0];
    textElement.innerText += transcript;
  }

  function onEnd() {
    const isRecording = buttonElement.classList.contains('pause');

    if (isRecording) {
      recognition.start();
    }
  }

  function onClick() {
    const ifPausing = buttonElement.classList.contains('record');

    if (ifPausing) {
      recognition.start();
      buttonElement.classList.remove('record');
      buttonElement.classList.add('pause');
    } else {
      recognition.stop();
      buttonElement.classList.remove('pause');
      buttonElement.classList.add('record');
    }
  }
 
  function run() {
    recognition.lang = 'th-TH';
    recognition.addEventListener('result', onResult);
    recognition.addEventListener('end', onEnd);

    buttonElement.addEventListener('click', onClick);
  }

  run();
})();
