document.addEventListener("DOMContentLoaded", () => {
    cargarPisos();
    cargarBlog();
});

function cargarPisos() {
    fetch("src/data/pisos.json")
        .then(response => response.json())
        .then(data => {
            const galeria = document.getElementById("galeria");
            galeria.innerHTML = "";

            data.forEach(piso => {
                const div = document.createElement("div");
                div.classList.add("propiedad");

                div.innerHTML = `
                    <img src="${piso.imagen}" alt="${piso.titulo}">
                    <h3>${piso.titulo}</h3>
                    <p>${piso.descripcion}</p>
                `;
                galeria.appendChild(div);
            });
        })
        .catch(error => console.error("Error cargando los pisos:", error));
}

function cargarBlog() {
    fetch("src/data/blog.json")
        .then(response => response.json())
        .then(data => {
            const blogContainer = document.getElementById("articulos");
            blogContainer.innerHTML = "";

            data.forEach(articulo => {
                const div = document.createElement("div");
                div.classList.add("articulo");

                div.innerHTML = `
                    <img src="${articulo.imagen}" alt="${articulo.titulo}">
                    <h3>${articulo.titulo}</h3>
                    <p>${articulo.contenido}</p>
                `;
                blogContainer.appendChild(div);
            });
        })
        .catch(error => console.error("Error cargando el blog:", error));
}
