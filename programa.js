/*Programa que determina que tipo de usuario eres y si eres mayor de edad como para poder acceder a el sitio
*/
let nombre = prompt("Buenas!! corroboraremos unos datos para verificar tu identidad, como dato importante debes de escribir todo con minúsculas comencemos... (Ingresa tu nombre)");
let apellido = prompt("Ingresa tu apellido")
let cedula = prompt("Ingresa tu cédula de identidad sin puntos ni guiones CI:");
const edad = Number(prompt("Por ultimo ingresa tu edad"));
let Categorias = prompt("¿Qué categoría de usuario tienes?\n1-usuario\n2-administrador\n3-dueño\n4-seo\n5-pasante");

if (edad >= 18) {
	alert("Todo está listo para que puedas trabajar buena jornada.");


	switch (Categorias) {
		case "1":
			alert("Tienes permisos de usuario.");
			break;

		case "2":
			alert("Tienes permisos de administrador.");
			break;

		case "3":
			alert("Tienes permisos de dueño.");
			break;

		case "4":
			alert("Tienes permisos de seo.");
			break;
		case "5":
			alert("Tienes permisos de pasante.");
			break;

		default:
			alert("Ese tipo de usuario no existe.  lo siento ya no podemos continuar inténtalo nuevamente.");
	}
} else {
	alert("Bienvenido pasante de ingeniero tendremos todo listo para que puedas trabajar con tu ingeniero en jefe");
}
