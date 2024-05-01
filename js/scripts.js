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
    
// modal 1
// Obtén una referencia al botón "Ver más" y al modal
var openModalButton = document.getElementById('openModalButton1');
var modal = document.getElementById('myModal1');

// Agrega un event listener al botón para abrir el modal cuando se hace clic
openModalButton.addEventListener('click', function() {
    modal.classList.add('is-active'); // Añade la clase 'is-active' para mostrar el modal
    document.documentElement.classList.add('no-scroll'); // Bloquea el scroll vertical en el html
});

// Agrega un event listener al botón de cierre del modal para cerrarlo cuando se hace clic
modal.querySelector('.modal-close').addEventListener('click', function() {
    modal.classList.remove('is-active'); // Quita la clase 'is-active' para ocultar el modal
    document.documentElement.classList.remove('no-scroll'); // Habilita el scroll vertical en el html
});
    
// modal 2
     // Obtén una referencia al botón "Ver más" y al modal
    var openModalButton2 = document.getElementById('openModalButton2');
    var modal2 = document.getElementById('myModal2');

    // Agrega un event listener al botón para abrir el modal cuando se hace clic
    openModalButton2.addEventListener('click', function() {
        modal2.classList.add('is-active'); // Añade la clase 'is-active' para mostrar el modal
    });

    // Agrega un event listener al botón de cierre del modal para cerrarlo cuando se hace clic
    modal2.querySelector('.modal-close').addEventListener('click', function() {
        modal2.classList.remove('is-active'); // Quita la clase 'is-active' para ocultar el modal
    });
    
// modal 3
     // Obtén una referencia al botón "Ver más" y al modal
    var openModalButton3 = document.getElementById('openModalButton3');
    var modal3 = document.getElementById('myModal3');

    // Agrega un event listener al botón para abrir el modal cuando se hace clic
    openModalButton3.addEventListener('click', function() {
        modal3.classList.add('is-active'); // Añade la clase 'is-active' para mostrar el modal
    });

    // Agrega un event listener al botón de cierre del modal para cerrarlo cuando se hace clic
    modal3.querySelector('.modal-close').addEventListener('click', function() {
        modal3.classList.remove('is-active'); // Quita la clase 'is-active' para ocultar el modal
    });
    
// modal 4
     // Obtén una referencia al botón "Ver más" y al modal
    var openModalButton4 = document.getElementById('openModalButton4');
    var modal4 = document.getElementById('myModal4');

    // Agrega un event listener al botón para abrir el modal cuando se hace clic
    openModalButton4.addEventListener('click', function() {
        modal4.classList.add('is-active'); // Añade la clase 'is-active' para mostrar el modal
    });

    // Agrega un event listener al botón de cierre del modal para cerrarlo cuando se hace clic
    modal4.querySelector('.modal-close').addEventListener('click', function() {
        modal4.classList.remove('is-active'); // Quita la clase 'is-active' para ocultar el modal
    });
    
// modal 5
     // Obtén una referencia al botón "Ver más" y al modal
    var openModalButton5 = document.getElementById('openModalButton5');
    var modal5 = document.getElementById('myModal5');

    // Agrega un event listener al botón para abrir el modal cuando se hace clic
    openModalButton5.addEventListener('click', function() {
        modal5.classList.add('is-active'); // Añade la clase 'is-active' para mostrar el modal
    });

    // Agrega un event listener al botón de cierre del modal para cerrarlo cuando se hace clic
    modal5.querySelector('.modal-close').addEventListener('click', function() {
        modal5.classList.remove('is-active'); // Quita la clase 'is-active' para ocultar el modal
    });
    
// modal 6
     // Obtén una referencia al botón "Ver más" y al modal
    var openModalButton6 = document.getElementById('openModalButton6');
    var modal6 = document.getElementById('myModal6');

    // Agrega un event listener al botón para abrir el modal cuando se hace clic
    openModalButton6.addEventListener('click', function() {
        modal6.classList.add('is-active'); // Añade la clase 'is-active' para mostrar el modal
    });

    // Agrega un event listener al botón de cierre del modal para cerrarlo cuando se hace clic
    modal6.querySelector('.modal-close').addEventListener('click', function() {
        modal6.classList.remove('is-active'); // Quita la clase 'is-active' para ocultar el modal
    });
    