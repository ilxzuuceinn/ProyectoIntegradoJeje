// Arreglo global para almacenar los usuarios registrados
const usuarios = [];

function registrar() {
    let nuevoUsuario = document.getElementById("nuevoUsuario").value;
    let nuevaContrasena = document.getElementById("nuevaContrasena").value;
    let mensaje1 = document.getElementById("mensaje1");

  
    if (nuevoUsuario === "" || nuevaContrasena === "") {
        mensaje1.textContent = "¡Completa todos los campos!";
        mensaje1.style.color = "red";
        return;
    }

    let yaExiste = false;

   
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
       
        usuarios.push({
            usuario: nuevoUsuario,
            contrasena: nuevaContrasena
        });
        mensaje1.textContent = "¡Registro exitoso!";
        mensaje1.style.color = "green";
        document.querySelector(".DivRegistro").hidden = true;
        document.querySelector(".DivInicioSesion").hidden = false;
        document.getElementById("usuario").value = nuevoUsuario;
    }
}

function iniciarSesion() {
    let usuarioIngresado = document.getElementById("usuario").value;
    let contrasenaIngresada = document.getElementById("contrasena").value;
    let mensaje2 = document.getElementById("mensaje2");

  
    if (usuarioIngresado === "" || contrasenaIngresada === "") {
        mensaje2.textContent = "¡Completa todos los campos!";
        mensaje2.style.color = "red";
        return;
    }

    let usuarioEncontrado = false;

   
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
