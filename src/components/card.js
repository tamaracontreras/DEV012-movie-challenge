export const card = (primerResultado) => {
  
  const section = document.createElement("section");
  const informacion = document.createElement("div");
  const fondo = document.createElement("div");
  const imgcont = document.createElement("div");
  const imgElement = document.createElement("img");
  imgElement.setAttribute("src",` ${primerResultado.Poster}`);
  const contCard = document.createElement("div");
  const idPelicula = document.createElement("h4");
  idPelicula.textContent = `${primerResultado.Title}`;
  const añoPelicula =document.createElement("p");
  añoPelicula.textContent =`${primerResultado.Year}`;
  
  


  // Asignar clases
  
  informacion.className = "informacion";
  fondo.className = "fondo";
  imgcont.className = "imgcont";
  contCard.className ="contCard"

 

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
