document.addEventListener("DOMContentLoaded", () => {
  // 1. MENÚ RESPONSIVE
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("nav-active");
      menuToggle.innerHTML = navLinks.classList.contains("nav-active") ? "✖" : "☰";
    });
  }

  // 2. ACTUALIZACIÓN AUTOMÁTICA DEL AÑO EN EL FOOTER
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 3. ANIMACIÓN DE SCROLL (REVEAL) PARA EL TIMELINE
  const hiddenElements = document.querySelectorAll(".hidden");
  if (hiddenElements.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );
    hiddenElements.forEach((el) => observer.observe(el));
  }

  // 4. HEADER AUTO-HIDE (SOLO CERTIFICACIONES)
  const header = document.querySelector("header");
  let lastScrollTop = 0;
  const currentPage = window.location.pathname.split("/").pop();

  if (header && (currentPage.includes("certificaciones.html") || currentPage.endsWith("certificaciones"))) {
    window.addEventListener("scroll", () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 100 && scrollTop > lastScrollTop) {
        header.classList.add("header-hidden");
      } else {
        header.classList.remove("header-hidden");
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
  }

  // 5. FORMULARIO FORMSPREE (CON PROTECCIÓN SI NO EXISTE EN LA PÁGINA)
  const form = document.getElementById("my-form");
  const status = document.getElementById("status");

  if (form && status) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const data = new FormData(form);
      const btn = form.querySelector(".btn-enviar");
      const originalBtnText = btn ? btn.innerHTML : "ENVIAR";

      if (btn) {
        btn.innerHTML = "PROCESANDO_DATOS...";
        btn.disabled = true;
      }
      status.classList.remove("success-style", "error-style");
      status.innerHTML = "";

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: data,
          headers: { Accept: "application/json" },
        });

        if (response.ok) {
          status.classList.add("success-style");
          status.innerHTML = `
            <span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </span> 
            ¡CONEXIÓN ESTABLECIDA! MENSAJE ENVIADO CON ÉXITO.
          `;
          form.reset();
        } else {
          status.classList.add("error-style");
          status.innerHTML = "ERROR: No se pudo validar el paquete de datos.";
        }
      } catch (error) {
        status.classList.add("error-style");
        status.innerHTML = "ERROR_CRÍTICO: Fallo en el enlace de red.";
      } finally {
        if (btn) {
          btn.innerHTML = originalBtnText;
          btn.disabled = false;
        }
      }
    });
  }
  // 6. DEMO INICIAL DE CARRUSEL (Suave, una sola pasada y se detiene)
  const carrusel = document.querySelector(".insignias-container");
  if (carrusel) {
    let velocidad = 0.35; // Muy lento y sutil (ajusta a 0.25 si lo quieres aún más pausado)
    let isAutoScrolling = true;
    let animId = null;

    // Desactivamos snap momentáneamente para que el recorrido inicial sea continuo
    carrusel.style.scrollSnapType = "none";
    carrusel.style.scrollBehavior = "auto";

    function animarPaseo() {
      if (!isAutoScrolling) return;

      // Comprobamos si el contenido realmente necesita scroll
      const maxScroll = carrusel.scrollWidth - carrusel.clientWidth;

      if (maxScroll > 5) {
        // Si aún no ha llegado al tope final
        if (carrusel.scrollLeft < maxScroll - 1) {
          carrusel.scrollLeft += velocidad;
          animId = requestAnimationFrame(animarPaseo);
        } else {
          // Llegó al final: se detiene de forma definitiva y entrega el control total al usuario
          finalizarAutoScroll();
        }
      }
    }
    function finalizarAutoScroll() {
      isAutoScrolling = false;
      if (animId) cancelAnimationFrame(animId);
      // Reactiva el encaje automático magnético para la navegación manual del usuario
      carrusel.style.scrollSnapType = "x mandatory";
    }

    // Pequeño retardo de 600ms al cargar para que el usuario note cuándo arranca a deslizar
    setTimeout(() => {
      animId = requestAnimationFrame(animarPaseo);
    }, 600);

    // Si el usuario toca o hace scroll manualmente antes de que termine, cancelamos la animación de inmediato
    carrusel.addEventListener("pointerdown", finalizarAutoScroll, { once: true });
    carrusel.addEventListener("wheel", finalizarAutoScroll, { passive: true, once: true });
    carrusel.addEventListener("touchstart", finalizarAutoScroll, { passive: true, once: true });
  }
});
