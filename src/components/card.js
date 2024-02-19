export const card = () => {
  // Crear elementos
  const section = document.createElement("section");
  const informacion = document.createElement("div");
  const fondo = document.createElement("div");
  const imgcont = document.createElement("div");
  const imgElement = document.createElement("img");
  imgElement.setAttribute("src", "img/startrek.png");
  const contCard = document.createElement("div");
  const idPelicula = document.createElement("h2");
  idPelicula.textContent = "Star Trek: First Contact";
  const añoPelicula =document.createElement("p");
  añoPelicula.textContent = "Year: 1975";
  
  

  // Asignar clases
  
  informacion.className = "informacion";
  fondo.className = "fondo";
  imgcont.className = "imgcont";

 

  // Construir la estructura del DOM
  section.appendChild(informacion);
  
  informacion.appendChild(fondo);

  fondo.appendChild(imgcont);
  imgcont.appendChild(imgElement);
  fondo.appendChild(contCard);
  contCard.appendChild(idPelicula);
  contCard.appendChild(añoPelicula);
 

  return section;
};
