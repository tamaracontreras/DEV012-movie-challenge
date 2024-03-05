/* eslint-disable no-undef */
// Importa la función del componente
import { card } from './card.js';

// Prueba para verificar si el componente crea correctamente los elementos esperados
test('El componente card debe crear y devolver un elemento <section> con la información correcta', () => {
// Crea un objeto de prueba que simule un resultado de búsqueda
	const primerResultado = {
		Title: 'Título de la película',
		Year: '2022',
		Poster: 'url-de-la-imagen.jpg',
	};

	// Llama a la función del componente con el objeto de prueba
	const section = card(primerResultado);

	// Verifica si se ha creado un elemento <section>
	expect(section.tagName).toBe('SECTION');

	// Verifica si los elementos hijos esperados están presentes y tienen los valores correctos
	const informacion = section.querySelector('.informacion');
	expect(informacion).toBeTruthy();

	const fondo = section.querySelector('.fondo');
	expect(fondo).toBeTruthy();

	const imgcont = section.querySelector('.imgcont');
	expect(imgcont).toBeTruthy();

	const contCard = section.querySelector('.contCard');
	expect(contCard).toBeTruthy();

	const idPelicula = section.querySelector('h4');
	expect(idPelicula).toBeTruthy();
	expect(idPelicula.textContent).toBe(primerResultado.Title);

	const añoPelicula = section.querySelector('p');
	expect(añoPelicula).toBeTruthy();
	expect(añoPelicula.textContent).toBe(primerResultado.Year);
});
