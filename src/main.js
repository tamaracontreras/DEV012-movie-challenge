import { searchMovies } from './api.js';


// document.getElementById("root").appendChild(section);
// en ete momento es cuando vamos a ejecutar esta peticion (evento boton buscar)



// Manejar el evento de clic en el botón de búsqueda
document.getElementById('searchButton').addEventListener('click', () => {
// Llamar a la función searchMovies y manejar la promesa devuelta
	searchMovies();
});