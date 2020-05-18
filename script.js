const toggle = document.querySelector('#toggle');
const closeBtn = document.querySelector('#close');
const open = document.querySelector('#open');
const modal = document.querySelector('#modal');

toggle.addEventListener('click', () => document.body.classList.toggle('show-nav'));

open.addEventListener('click', () => {
	modal.classList.add('show-modal');
});

closeBtn.addEventListener('click', () => modal.classList.remove('show-modal'));

window.addEventListener('click', (e) => {
	e.target === modal ? modal.classList.remove('show-modal') : false;
});
