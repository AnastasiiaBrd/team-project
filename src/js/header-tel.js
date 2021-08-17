(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-tel-open]'),
    closeMenuBtn: document.querySelector('[data-tel-close]'),
    menu: document.querySelector('[data-tel]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('tel-open');
  }
})();
