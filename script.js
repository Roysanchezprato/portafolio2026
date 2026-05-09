document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("nav-active");

      if (navLinks.classList.contains("nav-active")) {
        menuToggle.innerHTML = "✖";
      } else {
        menuToggle.innerHTML = "☰";
      }
    });
  }

  // 2. ACTUALIZACIÓN AUTOMÁTICA DEL AÑO EN EL FOOTER
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
  }
});

// ANIMACIÓN DE SCROLL (REVEAL) PARA EL TIMELINE
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.1 },
); // El elemento aparece cuando el 10% es visible

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// EFECTO: OCULTAR EL MENÚ SOLO EN LA PÁGINA DE CERTIFICACIONES
const header = document.querySelector("header");
let lastScrollTop = 0;

// Obtenemos el nombre del archivo actual (ej: "certificaciones.html")
const currentPage = window.location.pathname.split("/").pop();

// Solo aplicamos el efecto si estamos en la página de certificaciones
// (Ojo: Si en tu servidor se llama distinto, cambia el nombre aquí)
if (currentPage.includes("certificaciones.html") || currentPage.endsWith("certificaciones")) {
  window.addEventListener("scroll", () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100 && scrollTop > lastScrollTop) {
      // Hacemos scroll hacia abajo -> Ocultamos el menú
      header.classList.add("header-hidden");
    } else {
      // Hacemos scroll hacia arriba -> Mostramos el menú
      header.classList.remove("header-hidden");
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
}

// para FORMSPREE

// Ejemplo rápido con Fetch
const form = document.getElementById("my-form");
const status = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // Evita que la página se recargue

  const data = new FormData(form);
  const btn = form.querySelector(".btn-enviar");
  const originalBtnText = btn.innerHTML;

  // 1. Estado visual inicial: Botón cargando y limpiamos clases previas
  btn.innerHTML = "PROCESANDO_DATOS...";
  btn.disabled = true;
  status.classList.remove("success-style", "error-style");
  status.innerHTML = "";

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      // 2. ÉXITO: Aplicamos estilo neón y mensaje tipo terminal
      status.classList.add("success-style");
      status.innerHTML = `
    <span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
    </span> 
    ¡CONEXIÓN ESTABLECIDA! MENSAJE ENVIADO CON ÉXITO.
`;
      form.reset(); // Limpia los campos
    } else {
      // 3. ERROR DE SERVIDOR: El mensaje llegó pero Formspree devolvió error
      const errorData = await response.json();
      status.classList.add("error-style");
      status.innerHTML = "ERROR: No se pudo validar el paquete de datos.";
    }
  } catch (error) {
    // 4. ERROR DE RED: No hay internet o el servidor no responde
    status.classList.add("error-style");
    status.innerHTML = "ERROR_CRÍTICO: Fallo en el enlace de red.";
  } finally {
    // 5. RESTAURAR BOTÓN: Pase lo que pase, el botón vuelve a la normalidad
    btn.innerHTML = originalBtnText;
    btn.disabled = false;
  }
});
