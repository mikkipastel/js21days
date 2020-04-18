(() => {
  // เริ่มเขียนโค้ด
  let currentIndex = 0;

  function displayImage(imageElements, newIndex) {
    const lastIndex = imageElements.length - 1;

    if (newIndex < 0) {
      newIndex = lastIndex;
    } else if (newIndex > lastIndex) {
      newIndex = 0;
    }

    const newImage = imageElements[newIndex];
    newImage.scrollIntoView({ behavior: 'smooth'});

    currentIndex = newIndex
  }

  function run() {
    const imageElements = document.querySelectorAll('img');
    const previousButtonElement = document.querySelector('.previous');
    const nextButtonElement = document.querySelector('.next');

    previousButtonElement.addEventListener('click', () => displayImage(imageElements, currentIndex-1));
    nextButtonElement.addEventListener('click', () => displayImage(imageElements, currentIndex+1));
  }

  run();

})();
