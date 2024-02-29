import { card } from '/components/card.js';

export function searchMovies() {
	// Obtener el valor del input
	const searchTerm = document.getElementById('searchInput').value;
	console.log(
		'%cBúsqueda de películas con el término:',
		'color: #2196F3',
		searchTerm
	);

	// Realizar la solicitud a la API de OMDB
	const apiKey = 'ab8939f0';
	fetch(
		`https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(
			searchTerm
		)}&y=&page=1&type=movie&plot=short&r=json`
	)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			// Verificar si se encontraron resultados
			if (data.Search && data.Search.length > 0) {
				// Obtener el primer resultado
				const primerResultado = data.Search[0];
				console.log(
					`${primerResultado.Title} (${primerResultado.Year})(${primerResultado.Type})`
				);

				// Obtener el ID de IMDb del primer resultado
				const imdbID = primerResultado.imdbID;

				// Realizar una segunda solicitud para obtener los detalles de la película
				return fetch(
					`http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}&r=json`
				);
			} else {
				console.log('No se encontraron películas.');
				throw new Error('No se encontraron películas.');
			}
		})
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			// Verificar si se encontraron resultados
			if (data.Poster) {
				// Mostrar la URL de la imagen de la película
				console.log('URL de la imagen:', data.Poster);

				// Crear y agregar la tarjeta de la película al DOM
				const movieCard = card(data);
				document.getElementById('root').appendChild(movieCard);
			} else {
				console.log('No se encontró una imagen para esta película.');
				throw new Error('No se encontró una imagen para esta película.');
			}
		})
		.catch((error) => {
			console.log('Error al obtener datos:', error);
			// Manejar el error aquí
		});
}
