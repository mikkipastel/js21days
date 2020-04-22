(() => {
  // เริ่มเขียนโค้ด
  const message = new SpeechSynthesisUtterance();

  function onVoicesChanged() {
    const voices = speechSynthesis.getVoices();
    const thVoice = voices.find(voice => voice.lang === 'th-TH');
    message.voice = thVoice;
  }

  function onclick(event) {
    message.text = (event.target).getAttribute('alt');
    speechSynthesis.speak(message);
  }

  function run() {
    speechSynthesis.addEventListener('voiceschanged', onVoicesChanged);

    const imageElements = Array.from(document.querySelectorAll('img'));
    imageElements.forEach(imageElement => imageElement.addEventListener('click', onclick));
  }

  run();

})();
