const selected32 = document.querySelector('.selected32');
const optionsContainer32 = document.querySelector('.options-container32');

const optionsList = document.querySelectorAll('.option32');

selected32.addEventListener('click', () => {
  optionsContainer32.classList.toggle('active');
});

optionsList.forEach(o => {
  o.addEventListener('click', () => {
    selected32.innerHTML = o.querySelector('label').innerHTML;
    optionsContainer32.classList.remove('active');
  });
});
