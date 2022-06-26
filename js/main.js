// Selectores

// Modal

const productosContenedor = document.querySelector('#contenedor-productos')
const carritoContenedor = document.querySelector('#carrito-contenedor')
const contadorCarrito = document.querySelector('#contadorCarrito')
const precioTotal = document.querySelector('#precioTotal')
const vaciarCarrito = document.querySelector('#vaciarCarrito')

// Almacenamiento Local

let carrito
const carritoEnLS = JSON.parse(localStorage.getItem("carrito"))

if (carritoEnLS) {
    carrito = carritoEnLS
    
} else {
    carrito = []
}

// Agragar productos stock al DOM

stockproductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('container-fliud')

    div.innerHTML = `
                     <div class="row g-4">
                     <div class="col-12 col-md-6 col-lg-4">
                     <div class="card2 mx-auto rounded-3">
                     <div class="card-body">
                     <h5 class="card-title">${producto.nombre}</h5>
                     <p class="card-text">${producto.descripcion}</p>
                     <h5 class="card-title">$${producto.precio}</h5>
                     <img class="img" src=${producto.img} alt="">
                     <button onclick="agregarAlCarrito(${producto.id})" class="btn btn-primary btn-sm">Agregar<<i class="fa-solid fa-cart-arrow-down fa-2x"></i></button>
                     </div>
                     </div>
                     </div>
                     </div>
                    `
productosContenedor.append(div)
})

// Agragar productos al carrito de compras

const agregarAlCarrito = (id) => {
    const combos = stockproductos.find( (combo) => combo.id === id)
    carrito.push(combos)

    localStorage.setItem("carrito", JSON.stringify(carrito))

    renderCarrito()
    renderCantidad()
    rederTotal()
}

// Eliminar productos al carrito de compras

const eliminarDelCarrito = (id) => {
    const combos = carrito.find((combo) => combo.id === id)
    const indice = carrito.indexOf(combos)
    carrito.splice(indice, 1)

    localStorage.setItem("carrito", JSON.stringify(carrito))

    renderCarrito()
    renderCantidad()
    rederTotal()
}

// vaciar el carrito de compras

const vaciarElCarrito = () => {
    carrito = []

    localStorage.setItem("carrito", JSON.stringify(carrito))
    
    renderCarrito()
    renderCantidad()
    rederTotal()
}

vaciarCarrito.addEventListener('click', vaciarElCarrito)

// Render en carrito de compras

const renderCarrito = () => {
    carritoContenedor.innerHTML = ''

    carrito.forEach((combo) => {
        const div = document.createElement('div')
        div.classList.add('productoEnCarrito')

        div.innerHTML = `
                        <p>${combo.nombre}</p>
                        <img class="img" src=${combo.img} alt="">
                        <p>Precio: $${combo.precio}</p>
                        <button onclick="eliminarDelCarrito(${combo.id})" class="btn btn-primary btn-sm"><i class="fas fa-trash-alt"></i></button>
                        `
carritoContenedor.append(div)
    })
}

// Contador de productos en carrito

const renderCantidad = () => {
    contadorCarrito.innerText = carrito.length
}

// Suma total de la compra

const rederTotal = () => {
    let total = 0
    carrito.forEach((producto) => {
        total += producto.precio
    })

    precioTotal.innerText = total
}











