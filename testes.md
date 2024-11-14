<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home - Startup</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#sobre-nos">Sobre nós</a></li>
                <li><a href="#download">Download</a></li>
            </ul>
            <div class="logo">
                <img src="logo.png" alt="Logo da Startup">
            </div>
            <div class="right-nav">
                <label class="switch">
                    <input type="checkbox" id="theme-toggle">
                    <span class="slider"></span>
                </label>
                <a href="login.html" class="login">Login</a>
            </div>
        </nav>
    </header>

    <main>
        <section class="hero">
            <h1>Nome da Startup</h1>
            <p>slogan/missão</p>
            <div class="buttons">
                <button onclick="navigateTo('sobre-nos')">Sobre nós</button>
                <button onclick="navigateTo('download')">Download</button>
                <button onclick="navigateTo('contato')">Contato</button>
            </div>
            <div class="image-container">
                <img src="geospatial-image.jpg" alt="Imagem Geoespacial de um Relevo">
            </div>
        </section>
    </main>

    <script src="script.js"></script>
</body>
</html>

----

/* Estilos globais */
body {
    font-family: Arial, sans-serif;
    background-color: white;
    color: black;
    margin: 0;
    padding: 0;
    transition: background-color 0.3s, color 0.3s;
}

/* Cabeçalho e navegação */
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #333;
    color: white;
}

header nav ul {
    list-style: none;
    display: flex;
    gap: 20px;
}

header nav ul li a {
    color: white;
    text-decoration: none;
}

.logo img {
    height: 40px;
}

.right-nav {
    display: flex;
    align-items: center;
    gap: 20px;
}

/* Modo escuro */
.switch {
    position: relative;
    display: inline-block;
    width: 34px;
    height: 20px;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 34px;
}

.slider:before {
    position: absolute;
    content: "";
    height: 14px;
    width: 14px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
}

input:checked + .slider {
    background-color: #2196F3;
}

input:checked + .slider:before {
    transform: translateX(14px);
}

.login {
    color: white;
    text-decoration: none;
    font-weight: bold;
}

/* Hero section */
.hero {
    text-align: center;
    padding: 40px 20px;
}

.hero h1 {
    font-size: 2.5em;
    margin: 0;
}

.hero p {
    font-size: 1.2em;
    color: #666;
}

.buttons button {
    margin: 10px;
    padding: 10px 20px;
    border: 2px solid #333;
    background-color: transparent;
    cursor: pointer;
    border-radius: 8px;
}

.buttons button:hover {
    background-color: #333;
    color: white;
}

.image-container {
    margin-top: 20px;
}

.image-container img {
    width: 300px;
    height: auto;
    border-radius: 10px;
    border: 2px solid #333;
}

/* Modo escuro ativo */
body.dark-mode {
    background-color: #121212;
    color: #f1f1f1;
}

body.dark-mode header {
    background-color: #1e1e1e;
}

body.dark-mode .buttons button {
    border-color: #f1f1f1;
}

body.dark-mode .buttons button:hover {
    background-color: #f1f1f1;
    color: #121212;
}

---

// Alterna o modo escuro/claro
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode", themeToggle.checked);
});

// Navegação para as seções da página
function navigateTo(sectionId) {
    // Função para rolar para a seção desejada
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}
