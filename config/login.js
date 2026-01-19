// Credenciales de ejemplo (cámbialas por otras si quieres)
const USER = "gianlop";
const PASS = "1234";

document.addEventListener("DOMContentLoaded", () => {

    // ---------------------------
    // LOGIN
    // ---------------------------
    const btnLogin = document.getElementById("btnLogin");
    const inputUser = document.getElementById("email");
    const inputPass = document.getElementById("password");

    if (btnLogin) {  // Solo si estamos en la pantalla de login
        btnLogin.addEventListener("click", function () {

            const user = inputUser.value.trim();
            const pass = inputPass.value.trim();

            if (user === USER && pass === PASS) {

                // Guardar sesión
                localStorage.setItem("auth", "true");

                // ¿Recordar usuario?
                const remember = document.getElementById("basic-checkbox").checked;
                if (remember) {
                    localStorage.setItem("remember", user);
                } else {
                    localStorage.removeItem("remember");
                }

                // Redirigir
                window.location.href = "../index.html"; // Cambia a tu página
            } else {
                alert("Usuario o contraseña incorrectos.");
            }
        });

        // Rellenar usuario si está guardado
        if (localStorage.getItem("remember")) {
            inputUser.value = localStorage.getItem("remember");
        }
    }

    // ---------------------------
    // LOGOUT
    // ---------------------------
    const btnLogout = document.getElementById("btnLogout");

    if (btnLogout) {  // Solo si estamos en páginas con botón de logout
        btnLogout.addEventListener("click", function (e) {
            e.preventDefault();

            // Borrar sesión activa
            localStorage.removeItem("auth");

            // Redirigir al login
            window.location.href = "../pages/sign-in.html"; // Cambia según tu ruta
        });
    }
});

