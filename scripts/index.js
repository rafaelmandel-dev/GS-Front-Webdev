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
//legal q to aqui 3 dias depois e to tentando entender pq eu comentei isso sendo que eu n ia entender o pq e no final das contas eu me perdi noq seria esse codigo aqui embaixo
//att: me lembrei q era o de login :DDD

document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.querySelector(".login");
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";

    if(isLoggedIn){
        loginButton.textContent = "Sair"
        loginButton.onclick = handleLogout;
    } else{
        loginButton.textContent = "Login";
        loginButton.onclick = openLoginModal;
    }
});

function handleLogin(event){
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginButton = document.querySelector(".login");

    if (username === "admin" && password === "admin"){
        alert("Login efetuado com sucesso");
        closeLoginModal();

        //isso daqui vai torcar o nome login por "sair"
        loginButton.textContent = "Sair";
        loginButton.onclick = handleLogout;
        localStorage.setItem("loggedIn", "true");
    } else{
        alert("Usuario ou senha incorretos");
    }
}

//funcao logout
function handleLogout(){
    const loginButton = document.querySelector(".login");

    alert("Voce foi Deslogado!")
    loginButton.textContent = "Login";
    loginButton.onclick = openLoginModal;
    localStorage.setItem("loggedIn", "false");
}