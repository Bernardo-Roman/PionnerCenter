// PionnerCenter - JavaScript nativo con Carrusel

document.addEventListener('DOMContentLoaded', function() {
    // Log de confirmación
    console.log("Pionner Center - Landing Page cargada correctamente");
    console.log("Versión: 2.1.0 | Optimizada SEO + Performance");

    // Registrar Service Worker (PWA)
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then(function(reg) {
                console.log('Service Worker registrado:', reg.scope);
            })
            .catch(function(err) {
                console.log('Error al registrar Service Worker:', err);
            });
    }

    // Tracking - WhatsApp click
    const btnWhatsapp = document.querySelector('.btn-whatsapp');
    if (btnWhatsapp) {
        btnWhatsapp.addEventListener('click', function() {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', { event_category: 'whatsapp', event_label: 'contacto' });
            }
            console.log('WhatsApp clickeado');
        });
    }

    // ===== Menú móvil =====
    initMobileMenu();

    // ===== Scroll suave =====
    initSmoothScroll();

    // ===== Carrusel de Galería =====
    initCarrusel();

    // ===== Botón Subir =====
    initBotonSubir();

    // ===== Formulario de Contacto =====
    initContactoForm();
});

// ===== Menú móvil =====
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });

        // Cerrar menú al hacer clic en un enlace
        const navLinksItems = navLinks.querySelectorAll('a');
        navLinksItems.forEach(function(link) {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
            });
        });
    }

    // Cerrar menú al redimensionar
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navLinks) {
            navLinks.classList.remove('active');
        }
    });
}

// ===== Scroll suave =====
function initSmoothScroll() {
    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    
    smoothLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbar = document.querySelector('.navbar');
                const navbarHeight = navbar ? navbar.offsetHeight : 0;
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                console.log("Navegación suave a: " + targetId);
            }
        });
    });
}

// ===== Carrusel de Galería =====
function initCarrusel() {
    const slides = document.querySelectorAll('.carrusel-slide');
    const indicadores = document.querySelectorAll('.indicador');
    const btnAnterior = document.querySelector('.carrusel-anterior');
    const btnSiguiente = document.querySelector('.carrusel-siguiente');
    
    if (slides.length === 0) return;

    let slideActual = 0;
    let intervaloAuto;
    const TIEMPO_AUTO = 4000; // 4 segundos

    // Función para mostrar slide específico
    function mostrarSlide(index) {
        // Validar índices
        if (index < 0) {
            index = slides.length - 1;
        } else if (index >= slides.length) {
            index = 0;
        }

        slideActual = index;

        // Actualizar slides
        slides.forEach(function(slide, i) {
            slide.classList.remove('activo');
            if (i === slideActual) {
                slide.classList.add('activo');
            }
        });

        // Actualizar indicadores
        indicadores.forEach(function(indicador, i) {
            indicador.classList.remove('activo');
            if (i === slideActual) {
                indicador.classList.add('activo');
            }
        });

        console.log('Carrusel: Slide ' + (slideActual + 1) + ' de ' + slides.length);
    }

    // Función para slide siguiente
    function slideSiguiente() {
        mostrarSlide(slideActual + 1);
    }

    // Función para slide anterior
    function slideAnterior() {
        mostrarSlide(slideActual - 1);
    }

    // Iniciar auto-rotación
    function iniciarAuto() {
        intervaloAuto = setInterval(slideSiguiente, TIEMPO_AUTO);
    }

    // Detener auto-rotación
    function detenerAuto() {
        clearInterval(intervaloAuto);
    }

    // Eventos de flechas
    if (btnAnterior) {
        btnAnterior.addEventListener('click', function() {
            detenerAuto();
            slideAnterior();
            iniciarAuto();
        });
    }

    if (btnSiguiente) {
        btnSiguiente.addEventListener('click', function() {
            detenerAuto();
            slideSiguiente();
            iniciarAuto();
        });
    }

    // Eventos de indicadores
    indicadores.forEach(function(indicador, index) {
        indicador.addEventListener('click', function() {
            detenerAuto();
            mostrarSlide(index);
            iniciarAuto();
        });
    });

    // Pausar al pasar el mouse
    const carruselContenedor = document.querySelector('.carrusel-contenedor');
    if (carruselContenedor) {
        carruselContenedor.addEventListener('mouseenter', detenerAuto);
        carruselContenedor.addEventListener('mouseleave', iniciarAuto);
    }

    // Iniciar auto-rotación al cargar
    iniciarAuto();
    console.log('Carrusel iniciado - Auto-rotación cada ' + (TIEMPO_AUTO / 1000) + ' segundos');
}

// ===== Botón Subir al Inicio =====
function initBotonSubir() {
    const btnSubir = document.getElementById('btnSubir');
    
    if (!btnSubir) return;

    // Mostrar/ocultar botón según scroll
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            btnSubir.classList.add('visible');
        } else {
            btnSubir.classList.remove('visible');
        }
    });

    // Acción de subir al hacer clic
    btnSubir.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        console.log('Subiendo al inicio de la página');
    });
}

// ===== Formulario de Contacto =====
function initContactoForm() {
    const form = document.getElementById('contactoForm');

    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (!name || !email || !message) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        // Validación de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            mostrarNotificacion('Por favor, ingresa un correo válido.');
            return;
        }

        // Establecer fecha/hora actual para el template
        const now = new Date();
        const timeString = now.toLocaleString('es-PY', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        document.getElementById('time').value = timeString;

        // Deshabilitar botón durante el envío
        const btnSubmit = form.querySelector('button[type="submit"]');
        const textoOriginal = btnSubmit.querySelector('span').textContent;
        btnSubmit.disabled = true;
        btnSubmit.querySelector('span').textContent = 'Enviando...';

        // Enviar via EmailJS
        emailjs.sendForm('service_ub71d3l', 'template_ierumnq', form)
            .then(function() {
                // Éxito
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'submit', { event_category: 'contacto', event_label: 'formulario_exito' });
                }
                mostrarNotificacion('¡Mensaje enviado! Te contactaremos pronto.');
                form.reset();
            }, function(error) {
                // Error
                console.error('Error al enviar email:', error);
                mostrarNotificacion('Error al enviar. Intenta de nuevo o usa WhatsApp.');
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'submit', { event_category: 'contacto', event_label: 'formulario_error' });
                }
            })
            .finally(function() {
                // Restaurar botón
                btnSubmit.disabled = false;
                btnSubmit.querySelector('span').textContent = textoOriginal;
            });
    });
}

// ===== Notificación verde inferior =====
function mostrarNotificacion(mensaje) {
    const notificacion = document.createElement('div');
    notificacion.className = 'notificacion';
    notificacion.textContent = mensaje;
    document.body.appendChild(notificacion);

    // Mostrar
    setTimeout(function() {
        notificacion.classList.add('visible');
    }, 10);

    // Ocultar y eliminar
    setTimeout(function() {
        notificacion.classList.remove('visible');
        setTimeout(function() {
            notificacion.remove();
        }, 400);
    }, 4000);
}
