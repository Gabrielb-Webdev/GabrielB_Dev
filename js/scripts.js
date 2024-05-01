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


    document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.animated-element').forEach(function (elem) {
    elem.classList.add('once');
  });
});

 $(document).ready(function () {
        var swiper = new Swiper('.swiper-container', {
            loop: true, // Hace que el carousel sea infinito
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
 });
    

     // Obtén una referencia al botón "Ver más" y al modal
    var openModalButton = document.getElementById('openModalButton');
    var modal = document.getElementById('myModal');

    // Agrega un event listener al botón para abrir el modal cuando se hace clic
    openModalButton.addEventListener('click', function() {
        modal.classList.add('is-active'); // Añade la clase 'is-active' para mostrar el modal
    });

    // Agrega un event listener al botón de cierre del modal para cerrarlo cuando se hace clic
    modal.querySelector('.modal-close').addEventListener('click', function() {
        modal.classList.remove('is-active'); // Quita la clase 'is-active' para ocultar el modal
    });