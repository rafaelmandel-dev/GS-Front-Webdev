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