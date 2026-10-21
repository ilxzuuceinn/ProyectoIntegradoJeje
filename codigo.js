// Arreglo global para almacenar los usuarios registrados
const usuarios = [];

function registrar() {
    let nuevoUsuario = document.getElementById("nuevoUsuario").value;
    let nuevaContrasena = document.getElementById("nuevaContrasena").value;
    let mensaje1 = document.getElementById("mensaje1");

    // Validar campos vacíos
    if (nuevoUsuario === "" || nuevaContrasena === "") {
        mensaje1.textContent = "¡Completa todos los campos!";
        mensaje1.style.color = "red";
        return;
    }

    let yaExiste = false;

    // Verificar si el usuario ya existe
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].usuario === nuevoUsuario) {
            yaExiste = true;
            break;
        }
    }

    if (yaExiste) {
        mensaje1.textContent = "¡El nombre de usuario ya está registrado!";
        mensaje1.style.color = "red";
    } else {
        // Guardar el nuevo usuario en el arreglo
        usuarios.push({
            usuario: nuevoUsuario,
            contrasena: nuevaContrasena
        });
        mensaje1.textContent = "¡Registro exitoso!";
        mensaje1.style.color = "green";
    }
}

function iniciarSesion() {
    let usuarioIngresado = document.getElementById("usuario").value;
    let contrasenaIngresada = document.getElementById("contrasena").value;
    let mensaje2 = document.getElementById("mensaje2");

    // Validar campos vacíos
    if (usuarioIngresado === "" || contrasenaIngresada === "") {
        mensaje2.textContent = "¡Completa todos los campos!";
        mensaje2.style.color = "red";
        return;
    }

    let usuarioEncontrado = false;

    // Buscar coincidencia en el arreglo de usuarios
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].usuario === usuarioIngresado && usuarios[i].contrasena === contrasenaIngresada) {
            usuarioEncontrado = true;
            break;
        }
    }

    if (usuarioEncontrado) {
        mensaje2.textContent = "¡Inicio de sesión exitoso! Bienvenido " + usuarioIngresado;
        mensaje2.style.color = "green";
    } else {
        mensaje2.textContent = "¡Usuario o contraseña incorrectos!";
        mensaje2.style.color = "red";
    }
}
/*
    let usuariosRegistrados = ["Josue", "Mario", "Andy"];
    let contrasenasRegistradas = ["1234", "6767", "7676"];

    let usuarioIngresado = document.getElementById("exampleInputEmail1").value.trim();
    let contrasenaIngresada = document.getElementById("exampleInputPassword1").value.trim();
    let notificacion = document.getElementById("notificacion");

    if (usuarioIngresado === "" && contrasenaIngresada === "") {
        notificacion.textContent = "Llene todas las casillas por favor.";
        notificacion.style.color = "red";
        return;
    }

    let accesoConcedido = false;

    for (let i = 0; i < usuariosRegistrados.length; i++) {
        if (usuariosRegistrados[i] === usuarioIngresado &&
            contrasenasRegistradas[i] === contrasenaIngresada) {
            accesoConcedido = true;
            break;
        }
    }

    if (accesoConcedido) {
        notificacion.textContent = "Inicio de sesión correcto";
        notificacion.style.color = "green";
        alert("Inicio de sesión correcto")
        window.location.href = "Inicio.html"
    } else {
        notificacion.textContent = "Usuario y/o contraseña incorrecto";
        notificacion.style.color = "red";
    }
}
*/