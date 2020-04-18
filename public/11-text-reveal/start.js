(() => {
  // เริ่มเขียนโค้ด
  function onScroll() {
    const sectionElements = Array.from(document.querySelectorAll('section'));
    sectionElements.forEach((sectionElement) => {
      const imageElement = sectionElement.querySelector('img');
      const textElement = sectionElement.querySelector('.text');

      const scrollPosition = window.pageYOffset;
      const revealPosition = imageElement.offsetTop + imageElement.offsetHeight / 10;

      if (scrollPosition >= revealPosition) {
        textElement.classList.add('reveal');
      }
    })
  }

  function run() {
    document.addEventListener('scroll', onScroll);
  }

  run();

})();
