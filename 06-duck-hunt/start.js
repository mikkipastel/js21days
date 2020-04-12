(() => {
  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function createDucks() {
    return [...Array(5)].map(() => {
      return {
        x: random(0, window.innerWidth),
        y: window.innerHeight,
        speedX: random(-50, 50),
        speedY: random(5, 10)
      }
    });
  }

  function setupDuckElement(duck) {
    const duckElement = document.createElement('div');
    duckElement.className = 'duck';
    duckElement.style.left = `${duck.x}px`;
    duckElement.style.top = `${duck.y}px`;
    duckElement.style.backgroundImage = 'url(./left-1.png)';
    document.body.appendChild(duckElement);
    return { duck, duckElement };
  }

  function getDuckBackgrounImage(duck, duckElement) {
    const direction = duck.speedX > 0 ? 'right' : 'left';
    return duckElement.style.backgroundImage.indexOf('1') !== -1 ? 
      `url(./${direction}-2.png)` : 
      `url(./${direction}-1.png)`;
  }

  function moveDuck(duckElement, duck) {
    const { left, top } = duckElement.getBoundingClientRect();
    const outOfBoundX = duck.x < 0 || duck.x > window.innerWidth;
    const outOfBoundY = duck.y < 0 || duck.y > window.innerHeight;

    if (outOfBoundX) {
      duck.speedX *= -1;
    }

    if (outOfBoundY) {
      duck.speedY *= -1;
    }

    duck.x = left + duck.speedX;
    duck.y = top - duck.speedY;
    duckElement.style.left = `${duck.x}px`;
    duckElement.style.top = `${duck.y}px`;

    duckElement.style.backgroundImage = getDuckBackgrounImage(duck, duckElement);
  }

  function shootDuck(event) {
    const duckElement = event.target;
    duckElement.style.transition = 'top 2s';
    duckElement.style.top = `${window.innerHeight}px`;

    clearInterval(duckElement.interval);
    setTimeout(() => {
      document.body.removeChild(duckElement);
      const duck = document.querySelector('.duck');

      if (!duck) {
        const winningElement = document.querySelector('.winning');
        winningElement.style.opacity = 1;
      }
    }, 2000);
  }

  function run() {
    const ducks = createDucks();
    const duckElements = ducks.map(setupDuckElement)

    duckElements.forEach(({duck, duckElement}) => {
      duckElement.interval = setInterval(() => moveDuck(duckElement, duck), 100);
      duckElement.addEventListener('click', shootDuck);
    });
  }

  run();

})();
