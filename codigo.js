const usuarios = [];
function registrar() {
    let userRegistro = document.getElementById("nuevoUsuario").value;
    let passRegistro = document.getElementById("nuevaContrasena").value;
    let mensaje1 = document.getElementById("mensaje1");
    if (userRegistro === "" || passRegistro === "") {

        mensaje1.textContent = "¡Completa todos los campos!";

        mensaje1.style.color = "red";

        mensaje.textContent = "¡Completa todos los campos!";


        mensaje.style.color = "red";

        return;

        I

    }

    let yaExiste = false;

    for (let i = 0; i < usuarios.length; i++) {

        if (usuarios[i].usuario === user) {

            yaExiste = true;

            break;
        }

    }
    if (yaExiste) {

        mensaje1.textContent = "¡El nombre de usuario ya está registrado!";

        mensaje1.style.color = "red";

    } else {

        usuarios.push({
            usuario: userRegistro,
            contrasena: passRegistro
        });
        mensaje1.textContent = "¡Registro exitoso!";
        mensaje1.style.color = "purple";
    }
}


function inicio() {
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