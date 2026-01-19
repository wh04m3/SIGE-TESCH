// auth.js
if (localStorage.getItem("auth") !== "true") {
    window.location.href = "../pages/sign-in.html";
}