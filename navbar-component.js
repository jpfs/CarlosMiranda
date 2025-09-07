// navbar-component.js
class NavbarComponent extends HTMLElement {
  constructor() {
    super();
    this.activePages = {
      "/": "inicio",
      "/index.html": "inicio",
      "/biografia": "biografia",
      "/biografia.html": "biografia",
      "/experiencia": "experiencia",
      "/experiencia.html": "experiencia",
      "/formacao": "formacao",
      "/formacao.html": "formacao",
      "/valores": "valores",
      "/valores.html": "valores",
      "/projetos": "projetos",
      "/projetos.html": "projetos",
      "/iniciativas": "iniciativas",
      "/iniciativas.html": "iniciativas",
      "/compromissos": "compromissos",
      "/compromissos.html": "compromissos",
      "/programa": "programa",
      "/programa.html": "programa",
      "/propostas": "propostas",
      "/propostas.html": "propostas",
      "/noticias": "noticias",
      "/noticias.html": "noticias",
      "/contacto": "contacto",
      "/contacto.html": "contacto",
      "/apoio": "apoio",
      "/apoio.html": "apoio",
      "/imprensa": "imprensa",
      "/imprensa.html": "imprensa",
    };
  }

  connectedCallback() {
    // Adicionar estilos de fonte ao head se ainda não existirem
    if (!document.getElementById("gotham-font-styles")) {
      const fontStyles = document.createElement("style");
      fontStyles.id = "gotham-font-styles";
      fontStyles.innerHTML = `
                @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');
                
                /* Aplicar Montserrat (similar a Gotham) a todo o site */
                * {
                    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important;
                }
                
                /* Ajustes específicos para melhor legibilidade */
                body {
                    font-weight: 400;
                    letter-spacing: -0.01em;
                }
                
                h1, h2, h3, h4, h5, h6 {
                    font-weight: 700;
                    letter-spacing: -0.02em;
                }
                
                .font-semibold {
                    font-weight: 600 !important;
                }
                
                .font-bold {
                    font-weight: 700 !important;
                }
                
                .font-medium {
                    font-weight: 500 !important;
                }
                
                /* Ajuste para botões e links */
                a, button {
                    font-weight: 500;
                    letter-spacing: -0.01em;
                }
            `;
      document.head.appendChild(fontStyles);
    }

    const currentPath = window.location.pathname;
    const activePage = this.activePages[currentPath] || "";

    this.innerHTML = `
            <nav class="bg-black border-gray-700 fixed top-0 left-0 right-0 z-50 shadow-lg">
                <div class="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
                    <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="./Seta vermelha.png" class="h-8" alt="Carlos Miranda Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Força para avançar</span>
                    </a>

                    <!-- Social Media Icons -->
                    <div class="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
                        <!-- Instagram -->
                        <a href="https://www.instagram.com/carlosmiranda.2025/" target="_blank" rel="noopener noreferrer"
                           class="text-white text-2xl p-2 rounded-full flex items-center justify-center w-10 h-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
                           title="Instagram">
                            <div class="group-hover:bg-gradient-to-br group-hover:from-yellow-400 group-hover:via-red-500 group-hover:to-purple-600 rounded-full p-2 -m-2 transition-all duration-300">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </div>
                        </a>

                        <!-- Facebook -->
                        <a href="https://www.facebook.com/carlosmiranda.eleicoesautarquicas2025" target="_blank" rel="noopener noreferrer"
                           class="text-white text-2xl p-2 rounded-full flex items-center justify-center w-10 h-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-blue-600 group"
                           title="Facebook">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </a>

                        <!-- YouTube -->
                        <a href="https://www.youtube.com/@tempodeesperanca-carlosmir7337/featured" target="_blank" rel="noopener noreferrer"
                           class="text-white text-2xl p-2 rounded-full flex items-center justify-center w-10 h-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-red-600 group"
                           title="YouTube">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                        </a>

                        <!-- Mobile menu button -->
                        <button data-collapse-toggle="mega-menu" type="button"
                                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
                                aria-controls="mega-menu" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>
                    </div>

                    <!-- Navigation Menu -->
                    <div id="mega-menu" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                        <ul class="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
                            <li>
                                <button id="mega-menu-dropdown-button" data-dropdown-toggle="mega-menu-dropdown"
                                        class="flex items-center justify-between w-full py-2 px-3 font-medium ${
                                          [
                                            "biografia",
                                            "experiencia",
                                            "formacao",
                                            "valores",
                                            "projetos",
                                            "iniciativas",
                                            "compromissos",
                                            "programa",
                                          ].includes(activePage)
                                            ? "text-blue-400"
                                            : "text-white"
                                        } border-b border-gray-700 md:w-auto hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0">
                                    Sobre
                                    <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                                    </svg>
                                </button>
                                <div id="mega-menu-dropdown"
                                     class="absolute z-10 grid hidden w-auto grid-cols-2 text-sm bg-gray-800 border border-gray-700 rounded-lg shadow-md md:grid-cols-3">
                                    <div class="p-4 pb-0 text-white md:pb-4">
                                        <ul class="space-y-4">
                                            <li><a href="/biografia.html" class="${
                                              activePage === "biografia"
                                                ? "text-blue-400"
                                                : "text-gray-400"
                                            } hover:text-blue-400">Biografia</a></li>
                                            <li><a href="/experiencia.html" class="${
                                              activePage === "experiencia"
                                                ? "text-blue-400"
                                                : "text-gray-400"
                                            } hover:text-blue-400">Experiência</a></li>
                                            <li><a href="/formacao.html" class="${
                                              activePage === "formacao"
                                                ? "text-blue-400"
                                                : "text-gray-400"
                                            } hover:text-blue-400">Formação</a></li>
                                            <li><a href="/valores.html" class="${
                                              activePage === "valores"
                                                ? "text-blue-400"
                                                : "text-gray-400"
                                            } hover:text-blue-400">Valores</a></li>
                                        </ul>
                                    </div>
                                    <div class="p-4 pb-0 text-white md:pb-4">
                                        <ul class="space-y-4">
                                            <li><a href="/projetos.html" class="${
                                              activePage === "projetos"
                                                ? "text-blue-400"
                                                : "text-gray-400"
                                            } hover:text-blue-400">Projetos</a></li>
                                            <li><a href="/iniciativas.html" class="${
                                              activePage === "iniciativas"
                                                ? "text-blue-400"
                                                : "text-gray-400"
                                            } hover:text-blue-400">Iniciativas</a></li>
                                            <li><a href="/compromissos.html" class="${
                                              activePage === "compromissos"
                                                ? "text-blue-400"
                                                : "text-gray-400"
                                            } hover:text-blue-400">Compromissos</a></li>
                                            <li><a href="/programa.html" class="${
                                              activePage === "programa"
                                                ? "text-blue-400"
                                                : "text-gray-400"
                                            } hover:text-blue-400">Programa</a></li>
                                        </ul>
                                    </div>
                                    <div class="p-4">
                                        <ul class="space-y-4">
                                            <li><a href="/contacto.html" class="${
                                              activePage === "contacto"
                                                ? "text-blue-400"
                                                : "text-gray-400"
                                            } hover:text-blue-400">Contacto</a></li>
                                            <li><a href="/apoio.html" class="${
                                              activePage === "apoio"
                                                ? "text-blue-400"
                                                : "text-gray-400"
                                            } hover:text-blue-400">Apoio</a></li>
                                            <li><a href="/imprensa.html" class="${
                                              activePage === "imprensa"
                                                ? "text-blue-400"
                                                : "text-gray-400"
                                            } hover:text-blue-400">Imprensa</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="/propostas.html" class="block py-2 px-3 ${
                                  activePage === "propostas"
                                    ? "text-blue-400"
                                    : "text-white"
                                } border-b border-gray-700 hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0">
                                    Propostas
                                </a>
                            </li>
                            <li>
                                <a href="/noticias.html" class="block py-2 px-3 ${
                                  activePage === "noticias"
                                    ? "text-blue-400"
                                    : "text-white"
                                } border-b border-gray-700 hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0">
                                    Notícias
                                </a>
                            </li>
                            <li>
                                <a href="/contacto.html" class="block py-2 px-3 ${
                                  activePage === "contacto"
                                    ? "text-blue-400"
                                    : "text-white"
                                } border-b border-gray-700 hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0">
                                    Contacto
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        `;

    // Re-inicializar Flowbite após inserir o HTML
    setTimeout(() => {
      if (typeof initFlowbite !== "undefined") {
        initFlowbite();
      }
    }, 100);
  }
}

// Registar o componente
customElements.define("navbar-component", NavbarComponent);
