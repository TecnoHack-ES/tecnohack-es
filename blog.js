document.addEventListener("DOMContentLoaded", () => {
    fetch("src/data/blog.json")
        .then(response => response.json())
        .then(data => mostrarArticulos(data))
        .catch(error => console.error("Error cargando blog:", error));
});

function mostrarArticulos(articulos) {
    const contenedor = document.getElementById("blog-container");

    if (!contenedor) {
        console.error("No se encontró la sección del blog.");
        return;
    }

    let html = "<div class='blog-list'>";
    
    articulos.forEach(articulo => {
        html += `
            <div class="blog-item">
                <a href="${articulo.url}">
                    <img src="${articulo.imagen}" alt="${articulo.titulo}">
                    <h3>${articulo.titulo}</h3>
                    <p>${articulo.contenido}</p>
                    <span>${articulo.fecha}</span>
                </a>
            </div>
        `;
    });

    html += "</div>";
    contenedor.innerHTML = html;
}
