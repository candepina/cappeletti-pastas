(function () {

    /*=====================================
    Sticky
    ======================================= */
    window.onscroll = function () {
        var header_navbar = document.querySelector(".navbar-area");
        var sticky = header_navbar.offsetTop;

        if (window.pageYOffset > sticky) {
            header_navbar.classList.add("sticky");
        } else {
            header_navbar.classList.remove("sticky");
        }



        // show or hide the back-top-top button
        var backToTo = document.querySelector(".scroll-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTo.style.display = "flex";
        } else {
            backToTo.style.display = "none";
        }
    };

    // section menu active
	function onScroll(event) {
		var sections = document.querySelectorAll('.page-scroll');
		var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

		for (var i = 0; i < sections.length; i++) {
			var currLink = sections[i];
			var val = currLink.getAttribute('href');
			var refElement = document.querySelector(val);
			var scrollTopMinus = scrollPos + 73;
			if (refElement.offsetTop <= scrollTopMinus && (refElement.offsetTop + refElement.offsetHeight > scrollTopMinus)) {
				document.querySelector('.page-scroll').classList.remove('active');
				currLink.classList.add('active');
			} else {
				currLink.classList.remove('active');
			}
		}
	};

    window.document.addEventListener('scroll', onScroll);
    
    // for menu scroll 
    var pageLink = document.querySelectorAll('.page-scroll');

    pageLink.forEach(elem => {
        elem.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(elem.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                offsetTop: 1 - 60,
            });
        });
    });

    "use strict";

    //Muestra de productos
    const pastasRellenasBtn = document.getElementById("pastasRellenasBtn");
  const pastasNoRellenasBtn = document.getElementById("pastasNoRellenasBtn");
  const salsasBtn = document.getElementById("salsasBtn");
  const pastaImage = document.getElementById("pastaImage");

  // Función para cambiar la imagen
  function cambiarImagen(src) {
    pastaImage.src = src;
  }

  // Agregar eventos a los botones
  pastasRellenasBtn.addEventListener("click", () => {
    cambiarImagen("assets/images/cappelletti/pastarellena.jpg"); // Imagen de pastas rellenas
  });

  pastasNoRellenasBtn.addEventListener("click", () => {
    cambiarImagen("assets/images/cappelletti/pastanorellena.jpg"); // Imagen de pastas no rellenas
  });

  salsasBtn.addEventListener("click", () => {
    cambiarImagen("assets/images/cappelletti/salsas.jpg"); // Imagen de salsa
  });
}) ();
