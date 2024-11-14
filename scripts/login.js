function login(){
    const validUser = "admin";
    const validPasswaord = "admin";
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === validUser && password === validPasswaord){
        alert("Login efetuado com sucesso");
        window.location.href = "home.html"; //do login pra home
    } else {
        alert("User ou senha incorretos"); //meu teclado e americano e n tenho acento, o user vai ficar ali ate alguem modificar e colocar usuario com acento 
    }
}

