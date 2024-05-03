document.addEventListener('DOMContentLoaded', function () {
    var contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar la recarga de la página

        var formData = new FormData(contactForm);

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData).toString()
        })
        .then(function () {
            // Si el envío fue exitoso, mostrar un mensaje de alerta
            alert('¡Formulario enviado correctamente!');
            // Recargar la página
            window.location.reload();
        })
        .catch(function (error) {
            // Si hay algún error en el envío, mostrar un mensaje de alerta con el error
            alert('Error al enviar el formulario: ' + error);
        });
    });
});