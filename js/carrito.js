// //carrito de compras pasteleria Torres

class producto {

    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = precio;
        
    }

}

const producto1 = new producto("tartas",300);
const producto2 = new producto("tortas",550);
const producto3 = new producto("Galleta",200);
const producto4 = new producto("masitas",900);
const producto5 = new producto("postres",800);
const producto6 = new producto("alfajores",200);
const producto7 = new producto("donas",250);
const producto8 = new producto("muffins",500);


const Basededatos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8]


//Carrito vasio 
let carrito = []

let seleccionDeusuario = prompt("gracias por preferirnosdesea comprar alguno de neustros productos? o prefiere solo ver? ")

//boocle para opciones de compra 
while (seleccionDeusuario != "si" && selection != "no") {
    alert("ingrese si o no para continuar")
    seleccionDeusuario = prompt("desea comprar algo? si o no")

}

if (seleccionDeusuario == "si") {
    alert("gracias por preferirnos ahora puedes comprar,ahora te mostramos nuestro catalogo que tengas buen dia.")
    let productosDelatienda = Basededatos.map((Basededatos) => Basededatos.nombre + " " + Basededatos.precio + "$");
    alert(productosDelatienda.join("-"));
} else if (seleccionDeusuario == "no") {
    alert("gracias por visitarnos");
}

// recorrer contenido del array y poder seleccionar productos
while (seleccionDeusuario != "no") {

    let producto = prompt("seleccione el producto que desea")
    let precio = 0

    if (producto == "tartas" || producto == "tortas" || producto == "galletitas" || producto == "masitas" ||
        producto == "postres" || producto == "alfajores" || producto == "donas" || producto == "muffins") {

        switch (producto) {
            case "tartas":
                precio = 300;
                break;
            case "tortas":
                precio = 550;
                break;
            case "galletitas":
                precio = 200;
                break;
            case "masitas":
                precio = 900;
                break;
            case "postres":
                precio = 800;
                break;
            case "alfajores":
                precio = 200;
                break;
            case "donas":
                precio = 250;
                break;
            case "muffins":
                precio = 500;
                break;
            default:
                break;


        }

        // crear la cantidad que desea comprar 
        let unidadesDecadaproducto = parseInt(prompt("Cuantas unidades de este producto quiere agregar a el carrito"))
        // llenar el arrey con productos, unidades y sus respectivos precios
        carrito.push({ producto, unidadesDecadaproducto, precio })

        // en caso de que no dispongamos con stock tendremos este alert   
    } else {
        alert("no tenemos stock disponible ahora mismo mejor consulte en sucursal por disponibilidades proximas disculpe.")
    }

    seleccionDeusuario = prompt("¿Quiere agregar algo mas a el carrito?")
    // en caso de que el usuario ya no quiera comprar mas o quiera continuar
    while (seleccionDeusuario == "no") {
        alert("Gracias por su preferencia que disfrute sus productos")
        carrito.forEach((estaDodeelcarrito) => {
            console.log(`producto: ${estaDodeelcarrito.producto}, Unidades: ${estaDodeelcarrito.unidadesDecadaproducto}, El total a abonar es: ${estaDodeelcarrito.unidadesDecadaproducto * estaDodeelcarrito.precio} `)

        })
        break
    }
}

// con el metodo redius

const acumuladorTotal = carrito.reduce((acumulador, el) => acumulador + el.precio * el.unidadesDecadaproducto,0)
console.log(`El total de su compra es : ${acumuladorTotal} `)
