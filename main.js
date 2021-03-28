let colores = [
	'red',
	'blue',
	'yellow'
];

let elegir = '';

let semaforo=true;

let titulo = document.querySelector('body');

titulo.addEventListener('click', () => {



	if (semaforo) {
		elegir = colores[1];
		semaforo = false;
		titulo.style.background = elegir;
	} else {
		elegir = colores[0];
		semaforo = true;
		titulo.style.background = elegir;
	}

	
});