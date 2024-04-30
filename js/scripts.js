    document.addEventListener('DOMContentLoaded', function () {
        // Obtener el botón de hamburguesa y el menú
        var navbarBurger = document.querySelector('.navbar-burger');
        var navbarMenu = document.querySelector('.navbar-menu');

        // Añadir evento de clic al botón de hamburguesa
        navbarBurger.addEventListener('click', function () {
            // Alternar la clase 'is-active' en el botón de hamburguesa
            navbarBurger.classList.toggle('is-active');
            // Alternar la clase 'is-active' en el menú
            navbarMenu.classList.toggle('is-active');
        });
    });
