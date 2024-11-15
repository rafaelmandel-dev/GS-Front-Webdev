//tentativa de um modo dark
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode", themeToggle.checked);
});

//redirecionar as paradas
function navigateTo(section){
    window.location.hash = section;
}

//abrir o login e depois fechar
function openLoginModal(){
    document.getElementById("login-modal").classList.add("show");
    document.getElementById("login-modal").classList.remove("hide");
}

function closeLoginModal(){
    document.getElementById("login-modal").classList.add("hide");
    document.getElementById("login-modal").classList.remove("show");
}

//a partir daqui e so pra tras :DDD
function handleLogin(event){
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "admin"){
        alert("Login efetuado com sucesso");
        window.location.href = "home.html"
    } else{
        alert("Usuario ou senha incorretos");
    }
}