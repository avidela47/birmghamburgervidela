// Selectores

// Modal

const productosContenedor = document.querySelector('#contenedor-productos')
const carritoContenedor = document.querySelector('#carrito-contenedor')
const contadorCarrito = document.querySelector('#contadorCarrito')
const precioTotal = document.querySelector('#precioTotal')
const vaciarCarrito = document.querySelector('#vaciarCarrito')

// Almacenamiento Local

// Operador logico OR

let carrito = JSON.parse(localStorage.getItem("carrito")) || []

// Sin Operador logico OR

// let carrito
// const carritoEnLS = JSON.parse(localStorage.getItem("carrito"))

// if (carritoEnLS) {//
//     carrito = carritoEnLS
   
// } else {
//     carrito = []
// }

 // Agragar productos stock al DOM

// Operador ternario para agregar descuento "linea 47"

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
                     <h5 class="card-title">${producto.descuento === true ? "<p>15% off</p>" : ''}</h5>
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

// Desestructuracion de objetos

const empleado1 = {
    nombre: "Ariel Videla",
    edad : 48,
    direccion: "Esmeralda 535",
    turnos:{
        jueves: "tarde",
        viernes: "mañana",
        sabado:"tarde",
        domingos:"franco"
    }
}

const {nombre, edad, direccion, turnos:{jueves}} = empleado1

console.log(nombre, edad, direccion, jueves)

// alias

const sucursal ={
    id_sucursal:5775,
    suc_localidad: "Cordoba",
    suc_direccion: "Jujuy 256",
    suc_cant_empl: 15
}

const {id_sucursal: id, suc_localidad: localidad, suc_direccion:domicilio, suc_cant_empl: empleados} = sucursal

console.log(id,localidad,domicilio,empleados)

// Desestructuracion en parametros

const mostrarSucursal = ({id_sucursal, suc_localidad, suc_direccion, suc_cant_empl}) =>{

    console.log("id: " + id_sucursal)
    console.log("localidad: " + suc_localidad)
    console.log("domicilio: " + suc_direccion)
    console.log("empleados: " + suc_cant_empl)
}

mostrarSucursal(sucursal)

// Desestructuracion en arrays

const ingredientes = ["Meadallon de Res", "Tomate", "Cebolla", "Queso", "Tocino"]

const [a, ,b, ,c] = ingredientes

console.log(a,b,c)

// Spread de arrays

const combo2 = ["Burger", "Papas", "Gaseosa", 1200]
const combo3 = ["Burger", "Ensalada", "Cerveza", 1500]

const compra = [...combo2, ...combo3]
console.log(compra)









