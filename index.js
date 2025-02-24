document.addEventListener("DOMContentLoaded", () => {
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
});
