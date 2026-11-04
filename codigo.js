const CLAVE_USUARIOS = "windforceUsuarios";
const CLAVE_SESION = "windforceUsuarioActivo";
let listaUsuarios = JSON.parse(localStorage.getItem(CLAVE_USUARIOS) || "[]");
let usuarioActivo = sessionStorage.getItem(CLAVE_SESION) || "";

function registrar() {
    let nuevoUsuario = document.getElementById("nuevoUsuario").value.trim();
    let nuevaContrasena = document.getElementById("nuevaContrasena").value;
    let mensaje1 = document.getElementById("mensaje1");

    if (nuevoUsuario === "" || nuevaContrasena === "") {
        mensaje1.textContent = "¡Completa todos los campos!";
        mensaje1.style.color = "red";
        return;
    }

    let yaExiste = listaUsuarios.some(function (usuario) {
        return usuario.nombre === nuevoUsuario;
    });

    if (yaExiste) {
        mensaje1.textContent = "¡El nombre de usuario ya está registrado!";
        mensaje1.style.color = "red";
        return;
    }

    listaUsuarios.push({ nombre: nuevoUsuario, contrasena: nuevaContrasena });
    localStorage.setItem(CLAVE_USUARIOS, JSON.stringify(listaUsuarios));

    mensaje1.textContent = "¡Registro exitoso! Ya puedes iniciar sesión.";
    mensaje1.style.color = "green";
    document.getElementById("nuevoUsuario").value = "";
    document.getElementById("nuevaContrasena").value = "";
    mostrarInicioSesion();
}

function iniciarSesion() {
    let usuarioIngresado = document.getElementById("usuario").value.trim();
    let contrasenaIngresada = document.getElementById("contrasena").value;
    let mensaje2 = document.getElementById("mensaje2");

    if (usuarioIngresado === "" || contrasenaIngresada === "") {
        mensaje2.textContent = "¡Completa todos los campos!";
        mensaje2.style.color = "red";
        return;
    }

    let usuarioEncontrado = listaUsuarios.find(function (usuario) {
        return usuario.nombre === usuarioIngresado
            && usuario.contrasena === contrasenaIngresada;
    });

    if (!usuarioEncontrado) {
        mensaje2.textContent = "¡Usuario o contraseña incorrectos!";
        mensaje2.style.color = "red";
        return;
    }

    usuarioActivo = usuarioIngresado;
    sessionStorage.setItem(CLAVE_SESION, usuarioActivo);
    window.location.href = "principal.html";
}

function mostrarInicioSesion() {
    let divReg = document.getElementById("DivRegistro");
    let divIni = document.getElementById("DivInicioSesion");

    if (divReg) {
        divReg.style.display = "none";
    }
    if (divIni) {
        divIni.style.display = "block";
    }
}

function mostrarRegistro() {
    let divReg = document.getElementById("DivRegistro");
    let divIni = document.getElementById("DivInicioSesion");

    if (divReg) {
        divReg.style.display = "block";
    }
    if (divIni) {
        divIni.style.display = "none";
    }
}

function cerrarSesion() {
    sessionStorage.removeItem(CLAVE_SESION);
    usuarioActivo = "";
    window.location.href = "index.html";
}

function inicializarPagina() {
    if (document.body.dataset.requiereSesion === "true" && !usuarioActivo) {
        window.location.replace("index.html");
        return;
    }

    let elementoUsuario = document.getElementById("usuarioActivo");
    if (elementoUsuario) {
        elementoUsuario.textContent = usuarioActivo;
    }
}

inicializarPagina();
