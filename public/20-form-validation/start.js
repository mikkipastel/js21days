(() => {
  // เริ่มเขียนโค้ด
  function displayError(element, message) {
    const smallElement = element.parentElement.querySelector('small');
    smallElement.innerText = message;
    element.classList.add('invalid');
    form.classList.add('invalid');
  }

  function displaySuccess() {
    document.body.innerHTML = '';

    const pElement = document.createElement('p');
    pElement.innerText = 'You have been logged in successfully';
    pElement.className.add('success');
    document.body.appendChild(pElement);
  }

  function resetState(element) {
    const smallElement = element.parentElement.querySelector('small');
    smallElement.innerText = '';
    element.classList.remove('invalid');
    form.classList.remove('invalid');
  }

  function validateLength(element, min, max) {
    const val = element.value;

    if (val.length < min || val.length > max) {
      const elementName = element.getAttribute('name');
      displayError(element, `${elementName} length must be between ${min} and ${max}`)
    }
  }

  function validateEmail(emailElement) {
    const regex = /\S+@\S+\.\S+/;
    if (regex.test(emailElement.value)) {
      displayError(emailElement, 'Email must be valid');
    }
  }

  function validateForm(event) {
    event.preventDefault();

    const emailElement = document.getElementById('email');
    const passwordElement = document.getElementById('password');

    resetState(emailElement);
    resetState(passwordElement);

    validateLength(emailElement, 10, 20);
    validateLength(passwordElement, 8, 20);

    validateEmail(emailElement);

    const isValidForm = !form.classList.contains('invalid');
    if (isValidForm) {
      displaySuccess();
    }
  }
  function run() {
    const formElement = document.querySelector('form');
    formElement.addEventListener('submit', validateForm)
  }

  run();
})();
