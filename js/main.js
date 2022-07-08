// Selectores

// Modal

const productosContenedor = document.querySelector('#contenedor-productos')
const carritoContenedor = document.querySelector('#carrito-contenedor')
const contadorCarrito = document.querySelector('#contadorCarrito')
const precioTotal = document.querySelector('#precioTotal')
const vaciarCarrito = document.querySelector('#vaciarCarrito')

// Almacenamiento Local / Operador logico OR

let carrito = JSON.parse(localStorage.getItem("carrito")) || []

let stock = []

 // Agragar productos stock al DOM con FETCH

 fetch(`./js/stock.json`)
    .then((resp) => resp.json())
    .then((data) => {
        stock = data

        stock.forEach((producto) => {
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
                             <button onclick="agregarAlCarrito(${producto.id})" class="btn btn-primary btn-sm">Agregar<i class="fa-solid fa-cart-arrow-down fa-2x"></i></button>
                             <h5 class="card-title">${producto.descuento === true ? "<p>15% off</p>" : ''}</h5>
                             </div>
                             </div>
                             </div>
                             </div>
                            `
        productosContenedor.append(div)
    })
})

// Agragar productos al carrito de compras

const agregarAlCarrito = (productoId) => {
    const combosEnCarrito = carrito.find((combo) => combo.id === productoId)

    if (combosEnCarrito) {
        combosEnCarrito.cantidad += 1
        showMensaje(combosEnCarrito.nombre)
    } else {
        const {id, nombre, img, precio} = stock.find( (combo) => combo.id === productoId)
    
        const combosAlCarrito = {
        id, nombre, img, precio, cantidad: 1
    }
        carrito.push(combosAlCarrito)
        showMensaje(nombre)
    }
    
    localStorage.setItem("carrito", JSON.stringify(carrito))

    renderCarrito()
    renderCantidad()
    rederTotal()
}

// Eliminar productos al carrito de compras

const eliminarDelCarrito = (id) => {
    const combos = carrito.find((combo) => combo.id === id)

    combos.cantidad -= 1

    if (combos.cantidad === 0){
        const indice = carrito.indexOf(combos)
        carrito.splice(indice, 1)
    }

    Toastify({
        text: `Se elimino 1 combo de ${combos.nombre}`,
        position: 'left',
        gravity: 'bottom',
        duration: 5000,
        style: {background: "linear-gradient(to right, #240b36, #d20bec, #462b16)",
        color: "#ffffff"
        }
    }).showToast()

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

// Sweetalert vaciar el carrito de compras

vaciarCarrito.addEventListener('click', () => {
    Swal.fire({
        title: 'Estas seguro?',
        text: "Estas a punto de vaciar el carrito!",
        icon: 'warning',
        background: 'linear-gradient(to right, #240b36, #462b16, #d20bec, #e15bf3 )',
        showCancelButton: true,
        confirmButtonColor: 'rgba(255, 255, 255, 0.1)',
        cancelButtonColor: 'rgba(255, 255, 255, 0.1)',
        confirmButtonText: 'Si, vaciar!',
        cancelButtonText: 'No, cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
            vaciarElCarrito()
            botonCerrar.click()
            Toastify({
                text: 'Se vacio el carrito',
                position: 'right',
                gravity: 'top',
                duration: 3000,
                style: {background: "linear-gradient(to right, #240b36, #d20bec, #462b16)",
                color: "#ffffff"
                }
            }).showToast()
        }
      })
})

// Render en carrito de compras

const renderCarrito = () => {
    carritoContenedor.innerHTML = ''

    carrito.forEach((combo) => {
        const div = document.createElement('div')
        div.classList.add('productoEnCarrito')

        div.innerHTML = `
                        ${combo.cantidad}- 
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
    contadorCarrito.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
}

// Suma total de la compra

const rederTotal = () => {
    let total = 0
    carrito.forEach((producto) => {
        total += producto.precio * producto.cantidad
    })

    precioTotal.innerText = total
}

// Toastify Agragar productos al carrito de compras

const showMensaje = (nombre) => {
    Toastify({
        text: `Se agrego una ${nombre} al CARRITO`,
        duration: 3000,
        gravity: "top",
        position: "left",
        onClick: () => {
            botonAbrir.click()
        },
        style: {
            background:"linear-gradient(to right, #240b36, #d20bec, #462b16)",
            color: "#ffffff",
        }
}).showToast();
}

    renderCarrito()
    renderCantidad()
    rederTotal()



    



