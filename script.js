let nombreIngresado = prompt("Ingrese su nombre:");
let emailIngresado = prompt("Ingrese su correo electrónico:");
let contraseñaIngresado = prompt("Ingrese su contraseña:");

if (nombreIngresado !== "" && emailIngresado !== "" && contraseñaIngresado !== "") {
    alert("Inicio de sesión exitoso. ¡Bienvenido, " + nombreIngresado + "!");

    alert("Productos disponibles:\n\n1. Objeto 1\n2. Objeto 2\n3. Objeto 3\n4. Objeto 4\n5. Objeto 5\n6. Objeto 6\n7. Objeto 7\n8. Objeto 8");

    var opcion = parseInt(prompt("Ingrese el número del producto que desea comprar (1-8):"));

    switch (opcion) {
        case 1:
            alert("Ha seleccionado Muñeco 1");
            break;
        case 2:
            alert("Ha seleccionado Muñeco 2");
            break;
        case 3:
            alert("Ha seleccionado Muñeco 3");
            break;
        case 4:
            alert("Ha seleccionado Muñeco 4");
            break;
        case 5:
            alert("Ha seleccionado Muñeco 5");
            break;
        case 6:
            alert("Ha seleccionado Muñeco 6");
            break;
        case 7:
            alert("Ha seleccionado Muñeco 7");
            break;
        case 8:
            alert("Ha seleccionado Muñeco 8");
            break;
        default:
            alert("Opción inválida. Por favor, seleccione un número válido.");
            break;
    }
} else {
    alert("Error. Por favor, complete todos los campos.");
}