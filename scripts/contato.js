let nome = document.querySelector('#name');
let email = document.querySelector('#email');
let number = document.querySelector('#number');
let reason = document.querySelector('#reason');
let message = document.querySelector('#message');
let btn = document.querySelector('#btn');

//pobjetivo e o campo de menssagem so ficar visivel quando a razao do contato for escolhido
reason.addEventListener('change', () => {
    message.disable = reason.value === '';
});

if (btn) {
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        if (!nome.value){
            alert('Porfavor coloque um nome para melhor te conhecermos');
        } else if (!email.value){
            alert('O email nao pode estar vazio');
        } else if (!number.value){
            alert('O numero de telefone nao pode estar vazio');
        } else if (!reason.value){
            alert('Selecione um motivo de contato');
        } else if (!message.value){
            alert('A mensagem nao pode estar vazio');
        } else {
            alert(`Obrigado por nos contactar ${nome.value}, em breve te responderemos pelo motivo ${reason.value}, mensagem: ${message.value}. Lembre-se de verificar seu email ${email.value} ou numero de telefone ${number.value} para ver nossa resposta!!!`);
        }
    });
}