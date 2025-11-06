const productosJSON = [
    {
        id: 1,
        nombre: "Café Moca",
        precio: 700.00,
        descripcion: "Es exquisito café con chocolate y crema.",
        imagen: "imagenes/cafe.jpg"
    },
    {
        id: 2,
        nombre: "Té verde",
        precio: 50.00,
        descripcion: "Hoja de té verde.",
        imagen: "imagenes/te-verde.jpg"
    },
    {
        id: 3,
        nombre: "Smoothie de Frutas",
        precio: 40.00,
        descripcion: "Mezcla de frutas.",
        imagen: "imagenes/snoopt.jpg"
    }
];

function mostrarProductos() {
    const contenedor = document.querySelector('#contenedor-productos');

    productosJSON.forEach(producto => {
        const card = document.createElement('div');
        card.classList.add("productos-card");
        card.innerHTML = `
            <img src="${producto.imagen}" alt="imagen del producto"> <h2> ${producto.nombre}</h2>
            <p>${producto.descripcion}</p>
            <button data-id="${producto.id}">Agregar al carrito</button>
        `;
        contenedor.appendChild(card);
    });
}

mostrarProductos();
