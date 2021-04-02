//Comienzo: desplegar y esconder el menu de navegacion
let cajaNav = document.querySelector('.caja-nav');
let botonMenu = document.querySelector('.contenido-header__boton');
let nav = document.querySelector('nav');

botonMenu.addEventListener('click', ()=>
{
	cajaNav.classList.toggle('caja-nav--aparecer');
	nav.classList.toggle('nav--aparecer');
})

cajaNav.addEventListener('click', (e)=>
{
	if (e.target != nav && e.target == cajaNav)
	{
		nav.classList.toggle('nav--aparecer');
		cajaNav.classList.toggle('caja-nav--aparecer');
	}
})
//Fin: desplegar y esconder el menu de navegacion