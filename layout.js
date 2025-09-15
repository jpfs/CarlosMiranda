const getLayout = () => {
  const mainContent = document.getElementById("main");
  const layout = `<html>
      <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Carlos Miranda</title>
    <link rel="icon" type="image/png" href="./Seta.vermelha.png" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.js"></script>
      </head>
      <body>
<header class="bg-slate-600 text-white shadow-lg">
  <div class="container mx-auto px-4">
    <div class="flex items-center justify-between h-16">
      <!-- Logo e Menu juntos -->
      <div class="flex items-center space-x-8">
        <a href="/" class="flex items-center space-x-3">
          <img src="./photos.main/Seta.vermelha.png" class="h-8" alt="Carlos Miranda Logo" />
          <span class="text-base font-semibold text-white whitespace-nowrap"
            >FORÇA PARA AVANÇAR</span
          >
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-6">
          <a
            href="/freguesias.html"
            class="text-white hover:text-blue-400 transition nav-freguesias"
            >Freguesias</a
          >
        </nav>
      </div>

      <!-- Social Media Icons - Desktop -->
      <div class="hidden md:flex items-center space-x-4">
        <a
          href="https://www.instagram.com/carlosmiranda.2025/"
          class="text-white hover:text-red-400 transition-colors duration-200"
        >
          <i class="fab fa-instagram text-xl"></i>
        </a>
        <a
          href="https://www.facebook.com/carlosmiranda.eleicoesautarquicas2025"
          class="text-white hover:text-red-400 transition-colors duration-200"
        >
          <i class="fab fa-facebook text-xl"></i>
        </a>
        <a
          href="https://www.youtube.com/@CarlosMiranda2025_PS_Sert%C3%A3"
          class="text-white hover:text-red-400 transition-colors duration-200"
        >
          <i class="fab fa-youtube text-xl"></i>
        </a>
      </div>

      <!-- Mobile menu button -->
      <div class="md:hidden">
        <button
          id="mobile-menu-button"
          class="text-white hover:text-red-400 focus:outline-none focus:text-red-400 transition-colors duration-200"
        >
          <i class="fas fa-bars text-xl"></i>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Menu -->
    <div id="mobile-menu" class="md:hidden hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 border-t border-slate-500">
        <a
          href="/freguesias.html"
          class="block px-3 py-2 text-white hover:text-red-400 hover:bg-slate-700 rounded transition-colors duration-200 font-medium"
          >Freguesias</a
        >
        <!-- Social Media Icons - Mobile -->
        <div
          class="flex items-center space-x-6 px-3 py-3 border-t border-slate-500 mt-3"
        >
          <span class="text-sm text-slate-300">Siga-nos:</span>
          <a
            href="https://www.instagram.com/carlosmiranda.2025/"
            class="text-white hover:text-red-400 transition-colors duration-200"
          >
            <i class="fab fa-instagram text-xl"></i>
          </a>
          <a
            href="https://www.facebook.com/carlosmiranda.eleicoesautarquicas2025"
            class="text-white hover:text-red-400 transition-colors duration-200"
          >
            <i class="fab fa-facebook text-xl"></i>
          </a>
          <a
            href="https://www.youtube.com/@CarlosMiranda2025_PS_Sert%C3%A3"
            class="text-white hover:text-red-400 transition-colors duration-200"
          >
            <i class="fab fa-youtube text-xl"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</header>
        <main></main>
    <!-- Footer -->
    <footer class="bg-gray-900 text-gray-300 py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <p class="text-sm">
            © 2025 Carlos Miranda - Candidato à Câmara Municipal da Sertã
          </p>
        </div>
      </div>
    </footer>
      </body>
    </html>`;

  document.body.innerHTML = layout;
  document.querySelector("main").appendChild(mainContent);
  initHeaderScripts();
};
function initHeaderScripts() {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = mobileMenuButton?.querySelector("i");

  if (!mobileMenuButton || !mobileMenu || !menuIcon) return;

  // Toggle do menu mobile
  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    menuIcon.className = mobileMenu.classList.contains("hidden")
      ? "fas fa-bars text-xl"
      : "fas fa-times text-xl";
  });

  // Fechar ao clicar fora
  document.addEventListener("click", (event) => {
    const isClickInsideMenu = mobileMenu.contains(event.target);
    const isClickOnButton = mobileMenuButton.contains(event.target);

    if (
      !isClickInsideMenu &&
      !isClickOnButton &&
      !mobileMenu.classList.contains("hidden")
    ) {
      mobileMenu.classList.add("hidden");
      menuIcon.className = "fas fa-bars text-xl";
    }
  });

  // Fechar ao redimensionar
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      mobileMenu.classList.add("hidden");
      menuIcon.className = "fas fa-bars text-xl";
    }
  });
}
getLayout();
