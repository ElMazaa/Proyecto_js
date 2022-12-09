

const contenedorDeproductos = document.getElementById('contenedorDeproductos')

const contenedorCarrito = document.getElementById('carrito-contenedor')

const vaciarCarrito = document.getElementById('vaciarCarrito')

const contadorCarrito = document.getElementById('contadorCarrito')


const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')


// array basio por que los elementos se van a ir agregando conforme a el usuario de click.
let carrito = []

// esto nos ayuda a que cuando recargemos la pagina no se resetee el carrito y queden los datos de antes de resetearlo
// uso la palabra (DOMContentLoaded) es palabra reservada que nos permite saber el momento en el que los elementos de el html se cargbaron completamente.
document.addEventListener('DOMContentLoaded', () => {
      
    // 
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

// boton para baciar el carrito de una vez no importra cuantos elementos se encuentrene en el ni que elemento sea solo se bacia el carrito queda en cero.
vaciarCarrito.addEventListener('click', () =>{
    carrito.length = 0
    actualizarCarrito()

})


//Agregar productos a el html desde Js
stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img src=${producto.img} alt= "">
    <h3>${producto.nombre}</h3>
    <p>${producto.desc}</p>
    <p>Talle: ${producto.talle}</p>
    <p class="precioProducto">Precio:$ ${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar">Agregar </button>
    `
    // aqui le doy la orden para que pase esto a el html con la propiedad appenChild todo en forma de div
    contenedorDeproductos.appendChild(div)

    const boton = document.getElementById(`agregar${producto.id}`)


    boton.addEventListener('click', () => {
        //esta funcion ejecuta el agregar el carrito con la id del producto
        agregarAlcarrito(producto.id)
    })
})

//funcion para agregar a el carrito
// y usamos unas condiconales para que el no ponga el mismo elemento 2 vese sino que se sume si es el mismo elemento
// y si no esta agrega el elemento nuevo a el carrito
const agregarAlcarrito = (prodId) => {


    const existe = carrito.some(prod => prod.id === prodId)

    if (existe) {
        const prod = carrito.map(prod => {
            if (prod.id === prodId) {
                prod.cantidad++
            }
        })
    } else {
        const item = stockProductos.find((prod) => prod.id === prodId)

        carrito.push(item)
    }

    actualizarCarrito()
}


// lo usaremos apra borrar cada elemento de el carrito con el metodo splice 
const eliminarDelCarrito = (prodId) => {
    
    const item = carrito.find((prod) => prod.id === prodId)

    const indice = carrito.indexOf(item)

    carrito.splice(indice, 1)

    console.log(carrito)

    actualizarCarrito()

}

// por cada producto crea un div que va a tener la clase productoEnCarrito
const actualizarCarrito = () => {
     
    contenedorCarrito.innerHTML = ""

    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `
        
        contenedorCarrito.appendChild(div)

        localStorage.setItem('carrito', JSON.stringify(carrito))

    })

    //actualizamos el contador de el carrito por cada elemento agregado o borrado usando la propiedad length. 
    contadorCarrito.innerText = carrito.length

    //con esto se sumen los productos que esten en el carrito
    console.log(carrito)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)


}