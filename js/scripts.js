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
openModalButton.addEventListener('click', function () {
    modal.classList.add('is-active'); // Añade la clase 'is-active' para mostrar el modal
    document.documentElement.classList.add('no-scroll'); // Bloquea el scroll vertical en el html
});

// Agrega un event listener al botón de cierre del modal para cerrarlo cuando se hace clic
modal.querySelector('.modal-close').addEventListener('click', function () {
    modal.classList.remove('is-active'); // Quita la clase 'is-active' para ocultar el modal
    document.documentElement.classList.remove('no-scroll'); // Habilita el scroll vertical en el html
});

// modal 2
// Obtén una referencia al botón "Ver más" y al modal
var openModalButton2 = document.getElementById('openModalButton2');
var modal2 = document.getElementById('myModal2');

// Agrega un event listener al botón para abrir el modal cuando se hace clic
openModalButton2.addEventListener('click', function () {
    modal2.classList.add('is-active'); // Añade la clase 'is-active' para mostrar el modal
    document.documentElement.classList.add('no-scroll'); // Bloquea el scroll vertical en el html
});

// Agrega un event listener al botón de cierre del modal para cerrarlo cuando se hace clic
modal2.querySelector('.modal-close').addEventListener('click', function () {
    modal2.classList.remove('is-active'); // Quita la clase 'is-active' para ocultar el modal
    document.documentElement.classList.remove('no-scroll'); // Habilita el scroll vertical en el html
});

// modal 3
// Obtén una referencia al botón "Ver más" y al modal
var openModalButton3 = document.getElementById('openModalButton3');
var modal3 = document.getElementById('myModal3');

// Agrega un event listener al botón para abrir el modal cuando se hace clic
openModalButton3.addEventListener('click', function () {
    modal3.classList.add('is-active'); // Añade la clase 'is-active' para mostrar el modal
    document.documentElement.classList.add('no-scroll'); // Bloquea el scroll vertical en el html
});

// Agrega un event listener al botón de cierre del modal para cerrarlo cuando se hace clic
modal3.querySelector('.modal-close').addEventListener('click', function () {
    modal3.classList.remove('is-active'); // Quita la clase 'is-active' para ocultar el modal
    document.documentElement.classList.remove('no-scroll'); // Habilita el scroll vertical en el html
});

// modal 4
// Obtén una referencia al botón "Ver más" y al modal
var openModalButton4 = document.getElementById('openModalButton4');
var modal4 = document.getElementById('myModal4');

// Agrega un event listener al botón para abrir el modal cuando se hace clic
openModalButton4.addEventListener('click', function () {
    modal4.classList.add('is-active'); // Añade la clase 'is-active' para mostrar el modal
    document.documentElement.classList.add('no-scroll'); // Bloquea el scroll vertical en el html
});

// Agrega un event listener al botón de cierre del modal para cerrarlo cuando se hace clic
modal4.querySelector('.modal-close').addEventListener('click', function () {
    modal4.classList.remove('is-active'); // Quita la clase 'is-active' para ocultar el modal
    document.documentElement.classList.remove('no-scroll'); // Habilita el scroll vertical en el html
});

// modal 5
// Obtén una referencia al botón "Ver más" y al modal
var openModalButton5 = document.getElementById('openModalButton5');
var modal5 = document.getElementById('myModal5');

// Agrega un event listener al botón para abrir el modal cuando se hace clic
openModalButton5.addEventListener('click', function () {
    modal5.classList.add('is-active'); // Añade la clase 'is-active' para mostrar el modal
    document.documentElement.classList.add('no-scroll'); // Bloquea el scroll vertical en el html
});

// Agrega un event listener al botón de cierre del modal para cerrarlo cuando se hace clic
modal5.querySelector('.modal-close').addEventListener('click', function () {
    modal5.classList.remove('is-active'); // Quita la clase 'is-active' para ocultar el modal
    document.documentElement.classList.remove('no-scroll'); // Habilita el scroll vertical en el html
});

// modal 6
// Obtén una referencia al botón "Ver más" y al modal
var openModalButton6 = document.getElementById('openModalButton6');
var modal6 = document.getElementById('myModal6');

// Agrega un event listener al botón para abrir el modal cuando se hace clic
openModalButton6.addEventListener('click', function () {
    modal6.classList.add('is-active'); // Añade la clase 'is-active' para mostrar el modal
    document.documentElement.classList.add('no-scroll'); // Bloquea el scroll vertical en el html
});

// Agrega un event listener al botón de cierre del modal para cerrarlo cuando se hace clic
modal6.querySelector('.modal-close').addEventListener('click', function () {
    modal6.classList.remove('is-active'); // Quita la clase 'is-active' para ocultar el modal
    document.documentElement.classList.remove('no-scroll'); // Habilita el scroll vertical en el html
});

document.addEventListener('DOMContentLoaded', function () {
    // Obtener todos los elementos del menú de navegación
    const navbarItems = document.querySelectorAll('.navbar-item');

    // Iterar sobre cada elemento del menú de navegación
    navbarItems.forEach(function (navbarItem) {
        // Agregar un event listener para el clic en cada elemento
        navbarItem.addEventListener('click', function (event) {
            // Prevenir el comportamiento predeterminado de los enlaces
            event.preventDefault();

            // Obtener el valor del atributo data-target
            const target = navbarItem.getAttribute('data-target');

            // Obtener la posición vertical de la sección objetivo
            const targetPosition = document.getElementById(target).offsetTop - 50; // Resta 50 píxeles

            // Desplazarse suavemente hasta la sección objetivo
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Obtener todos los botones
    const buttons = document.querySelectorAll('.button-c');

    // Iterar sobre cada botón
    buttons.forEach(function (button) {
        // Agregar un event listener para el clic en cada botón
        button.addEventListener('click', function (event) {
            // Prevenir el comportamiento predeterminado del botón
            event.preventDefault();

            // Obtener el valor del atributo data-target
            const target = button.getAttribute('data-target');

            // Obtener la posición vertical de la sección objetivo
            let targetPosition;
            if (target === "proyectos") {
                targetPosition = document.getElementById(target).offsetTop - 80; // Resta 100 píxeles
            } else {
                targetPosition = document.getElementById(target).offsetTop - 50; // Resta 50 píxeles
            }

            // Desplazarse suavemente hasta la sección objetivo
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Obtener el elemento del encabezado
    var topContent = document.querySelector('.top-content');
    // Obtener la barra de navegación
    var navbar = document.querySelector('.navbar');

    // Función para manejar el desplazamiento de la barra de navegación
    function handleNavbarScroll() {
        // Verifica si el elemento del encabezado ya no es visible
        if (isOutOfViewport(topContent)) {
            navbar.classList.remove('is-hidden-touch'); // Muestra la barra de navegación
        } else {
            navbar.classList.add('is-hidden-touch'); // Oculta la barra de navegación
        }
    }

    // Función para verificar si el elemento ya no es visible en la pantalla
    function isOutOfViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= window.innerHeight ||
            rect.left >= window.innerWidth ||
            rect.bottom <= 0 ||
            rect.right <= 0
        );
    }

    // Agrega un event listener para detectar el scroll de la página
    window.addEventListener('scroll', function () {
        handleNavbarScroll(); // Llama a la función para manejar el desplazamiento de la barra de navegación
    });

    // Llama a la función al cargar la página para manejar el estado inicial de la barra de navegación
    handleNavbarScroll();
});

var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

function formulario() {
    // Obtener el modal
    var modal1 = document.getElementById('myModal1');
    var modal2 = document.getElementById('myModal2');
    var modal3 = document.getElementById('myModal3');
    var modal4 = document.getElementById('myModal4');
    var modal5 = document.getElementById('myModal5');
    var modal6 = document.getElementById('myModal6');

    // Quitar la clase 'is-active' para ocultar el modal1
    modal1.classList.remove('is-active');
    modal2.classList.remove('is-active');
    modal3.classList.remove('is-active');
    modal4.classList.remove('is-active');
    modal5.classList.remove('is-active');
    modal6.classList.remove('is-active');

    // Habilitar el scroll vertical en el html
    document.documentElement.classList.remove('no-scroll');

    // Obtener la posición vertical de la sección "contacto"
    var targetPosition = document.getElementById('contacto').offsetTop;

    // Desplazarse suavemente hasta la sección "contacto"
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

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
        })
        .catch(function (error) {
            // Si hay algún error en el envío, mostrar un mensaje de alerta con el error
            alert('Error al enviar el formulario: ' + error);
        });
    });
});
