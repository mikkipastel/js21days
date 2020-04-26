(() => {
  const KEY = 'eVDtoquGVkxTBxrngtYxEtyzuqgFdOfvW-yCwPEyVVs';
  let page = 1;

  const loaderElement = document.querySelector('.loader');
  
  function showLoader() {  
    loaderElement.classList.add('visible');
  }

  function hideLoader() {
    loaderElement.classList.remove('visible');
  }

  async function displayImages() {
    showLoader();

    const result = await fetch(`https://api.unsplash.com/photos/?client_id=${KEY}&page=${page}&query=food`);
    const images = await result.json();

    const galleryElement = document.querySelector('.gallery');

    images.forEach(image => {
      const imageElement = document.createElement('img');
      imageElement.src = image.urls.small;
      imageElement.alt = image.alt_description;
      
      galleryElement.appendChild(imageElement);
    });

    page += 1;
    hideLoader();
  }

  function onScroll() {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      displayImages();
    }
  }

  function run() {
    document.addEventListener('scroll', onScroll);
    displayImages();
  }

  run();
})();
