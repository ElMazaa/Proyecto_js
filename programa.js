/*Programa que determina que tipo de usuario eres y si eres mayor de edad como para poder acceder a el sitio
*/

let nombre = prompt("Buenas!! Corroboraremos unos datos para verificar tu identidad, como dato importante debes de escribir todo con minúsculas comencemos... (Ingresa tu nombre)");
let apellido = prompt("Ingresa tu apellido")

comprobarLaedad()
categorias()


//Verificar la edad de el usuario
function comprobarLaedad() {
	let soloSiesmayor = confirm("Solo pueden entrar usuarios mayores de edad")
	ingreseLaedad(soloSiesmayor)
}


function ingreseLaedad(soloSiesmayor) {
	if (soloSiesmayor) {
		let edad = Number(prompt("Ingresa tu edad aqui"))

		confirmarSuedad(edad)
	} else {
		alert("necesitamos verificar su edad")
	}



}

function confirmarSuedad(edad) {

	if (edad >= 18) {

	} else {
		alert("No puedes ingresar eres menor de edad")
		comprobarLaedad()
	}

}




// Bucle con el cual segun la categoria de el usuario sabremos que tipo de usuario es
function categorias() {

	let Categorias = prompt("¿Qué categoría de usuario tienes?\n1-usuario\n2-administrador\n3-dueño\n4-seo\n5-pasante");

	switch (Categorias) {
		case "1":
			alert("Todo está listo para que puedas trabajar buena jornadan.\nTienes permisos de usuario.");
			break;

		case "2":
			alert("Todo está listo para que puedas trabajar buena jornadan.\nTienes permisos de administraor.");
			break;

		case "3":
			alert("Todo está listo para que puedas trabajar buena jornadan.\nTienes permisos de dueño.");
			break;

		case "4":
			alert("Todo está listo para que puedas trabajar buena jornadan.\nTienes permisos de seo");
			break;

		case "5":
			alert("Todo está listo para que puedas trabajar buena jornadan.\nTienes permisos de Pasante");
			break;


		default:
			alert(" Ese tipo de usuario no existe.  lo siento ya no podemos continuar intentalo nuevamente.");


	}


}