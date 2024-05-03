document.querySelector("form[name='contact']").addEventListener("submit", function (event) {
    // Evitar la recarga de la página
    event.preventDefault();

    // Aquí puedes agregar tu código para enviar el formulario usando fetch o lo que prefieras

    // Después del envío exitoso, redirigir a la misma página
    window.location.href = window.location.href + "?status=success"; // Agrega un parámetro de estado para mostrar un mensaje de éxito si lo deseas
});