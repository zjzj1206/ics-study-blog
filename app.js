const menu = document.getElementById('menu');
const chapters = document.getElementById('chapters');
menu?.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  chapters.classList.toggle('open', open);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    chapters?.classList.remove('open');
    menu?.setAttribute('aria-expanded', 'false');
  }
});
