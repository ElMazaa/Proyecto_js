// // //carrito de compras pasteleria Torres

// class producto {

//     constructor(nombre,precio){
//         this.nombre = nombre;
//         this.precio = precio;

//     }

// }

// const producto1 = new producto("tartas",300);
// const producto2 = new producto("tortas",550);
// const producto3 = new producto("Galleta",200);
// const producto4 = new producto("masitas",900);
// const producto5 = new producto("postres",800);
// const producto6 = new producto("alfajores",200);
// const producto7 = new producto("donas",250);
// const producto8 = new producto("muffins",500);


// const Basededatos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8]


// //Carrito vasio 
// let carrito = []

// let seleccionDeusuario = prompt("gracias por preferirnosdesea comprar alguno de neustros productos? o prefiere solo ver? ")

// //boocle para opciones de compra 
// while (seleccionDeusuario != "si" && selection != "no") {
//     alert("ingrese si o no para continuar")
//     seleccionDeusuario = prompt("desea comprar algo? si o no")

// }

// if (seleccionDeusuario == "si") {
//     alert("gracias por preferirnos ahora puedes comprar,ahora te mostramos nuestro catalogo que tengas buen dia.")
//     let productosDelatienda = Basededatos.map((Basededatos) => Basededatos.nombre + " " + Basededatos.precio + "$");
//     alert(productosDelatienda.join("-"));
// } else if (seleccionDeusuario == "no") {
//     alert("gracias por visitarnos");
// }

// // recorrer contenido del array y poder seleccionar productos
// while (seleccionDeusuario != "no") {

//     let producto = prompt("seleccione el producto que desea")
//     let precio = 0

//     if (producto == "tartas" || producto == "tortas" || producto == "galletitas" || producto == "masitas" ||
//         producto == "postres" || producto == "alfajores" || producto == "donas" || producto == "muffins") {

//         switch (producto) {
//             case "tartas":
//                 precio = 300;
//                 break;
//             case "tortas":
//                 precio = 550;
//                 break;
//             case "galletitas":
//                 precio = 200;
//                 break;
//             case "masitas":
//                 precio = 900;
//                 break;
//             case "postres":
//                 precio = 800;
//                 break;
//             case "alfajores":
//                 precio = 200;
//                 break;
//             case "donas":
//                 precio = 250;
//                 break;
//             case "muffins":
//                 precio = 500;
//                 break;
//             default:
//                 break;


//         }

//         // crear la cantidad que desea comprar 
//         let unidadesDecadaproducto = parseInt(prompt("Cuantas unidades de este producto quiere agregar a el carrito"))
//         // llenar el arrey con productos, unidades y sus respectivos precios
//         carrito.push({ producto, unidadesDecadaproducto, precio })

//         // en caso de que no dispongamos con stock tendremos este alert   
//     } else {
//         alert("no tenemos stock disponible ahora mismo mejor consulte en sucursal por disponibilidades proximas disculpe.")
//     }

//     seleccionDeusuario = prompt("¿Quiere agregar algo mas a el carrito?")
//     // en caso de que el usuario ya no quiera comprar mas o quiera continuar
//     while (seleccionDeusuario == "no") {
//         alert("Gracias por su preferencia que disfrute sus productos")
//         carrito.forEach((estaDodeelcarrito) => {
//             console.log(`producto: ${estaDodeelcarrito.producto}, Unidades: ${estaDodeelcarrito.unidadesDecadaproducto}, El total a abonar es: ${estaDodeelcarrito.unidadesDecadaproducto * estaDodeelcarrito.precio} `)

//         })
//         break
//     }
// }

// // con el metodo redius

// const acumuladorTotal = carrito.reduce((acumulador, el) => acumulador + el.precio * el.unidadesDecadaproducto,0)
// console.log(`El total de su compra es : ${acumuladorTotal} `)


// carrito de ventas 2.0 


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