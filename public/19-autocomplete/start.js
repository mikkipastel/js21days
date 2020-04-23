(() => {
  // เริ่มเขียนโค้ด
  const carBrands = [
    'BMW',
    'Masserati',
    'Mercedes Benz',
    'Ferrari',
    'Toyota',
    'Honda',
    'Hyundai'
  ];

  const searchElement = document.querySelector('.search');

  function onInput(event) {
    clearResults();

    const inputText = event.target.value.toLowerCase();
    const matchedCarBrands = carBrands.filter(carBrand => carBrand.toLowerCase().startsWith(inputText));

    const ulElement = document.createElement('ul');
    ulElement.classList.add('results');

    matchedCarBrands.forEach(carBrand => {
      const liElement = document.createElement('li');
      liElement.innerText = carBrand
      liElement.onclick = selectCarBrand;
      ulElement.appendChild(liElement);
    });
    document.body.appendChild(ulElement);
  }

  function selectCarBrand(event) {
    searchElement.value = event.target.innerText;
    clearResults();
  }

  function clearResults() {
    const ulElement = document.querySelector('.results');
    if (ulElement) {
      document.body.removeChild(ulElement);
    }
  }

  function run() {
    searchElement.addEventListener('input', onInput);
    document.addEventListener('click', clearResults);
  }

  run();
})();
