import throttle from 'lodash.throttle';
const form = document.querySelector('form');
const STORAGE_KEY = 'feedback-form-state';
form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onTextareaInput, 500));
populateInput();

function onFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const submitForm = {};
  formData.forEach((value, name) => (submitForm[name] = value));
  console.log(submitForm);
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(event) {
  let persistedForm = localStorage.getItem(STORAGE_KEY);
  if (persistedForm) {
    persistedForm = JSON.parse(persistedForm);
  } else {
    persistedForm = {};
  }
  persistedForm[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(persistedForm));
}

function populateInput() {
  let persistedForm = localStorage.getItem(STORAGE_KEY);
  if (persistedForm) {
    persistedForm = JSON.parse(persistedForm);
    Object.entries(persistedForm).forEach(([name, value]) => {
      form.elements[name].value = value;
    });
  }
}
