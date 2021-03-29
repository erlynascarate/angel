
let contentNav = document.querySelector('.content-nav');
let botonMenu = document.querySelector('.boton-menu');
let nav = document.querySelector('nav');

botonMenu.addEventListener('click', ()=>{
	contentNav.classList.toggle('content-nav--aparecer');
	nav.classList.toggle('nav--aparecer');
});

contentNav.addEventListener('click', (e)=>{
	if (e.target != nav){
		nav.classList.toggle('nav--aparecer');
		contentNav.classList.toggle('content-nav--aparecer');
	}
});