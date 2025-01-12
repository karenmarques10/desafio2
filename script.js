const nome = document.querySelector("#nome");
const nomeExibido = document.querySelector("#nome-cartao");
 
const numero = document.querySelector("#numero-cartao");
const numeroExibido = document.querySelector("#numero")

const mes = document.querySelector("#mes")
const mesExibido = document.querySelector("#data_mes")

const ano = document.querySelector("#ano")
const anoExibido = document.querySelector("#data_ano")

const cvc = document.querySelector("#cvc")
const cvcExibido = document.querySelector("#codigo")

const submit = document.querySelector("#enviar")
const formulario = document.querySelector(".form")
const enviar = document.querySelector("#enviar")
const agradecimento = document.querySelector(".agradecimento")
const obrigada = document.querySelector(".imagem-agradecimento")
const continuar = document.querySelector("#continuar")
const nomeErro = document.querySelector(".erro-nome");
const numeroErro = document.querySelector(".erro-numero");
const dataErro = document.querySelector(".erro-data");
const cvcErro = document.querySelector(".erro-cvc");

nome.addEventListener('keyup', () => nomeExibido.textContent = nome.value);
numero.addEventListener('keyup', () => numeroExibido.textContent = numero.value);
mes.addEventListener('keyup', () => mesExibido.textContent = mes.value);
ano.addEventListener('keyup', () => anoExibido.textContent = ano.value);
cvc.addEventListener('keyup', () => cvcExibido.textContent = cvc.value);
enviar.addEventListener('mousedown', function (){

formulario.style.display = 'none'
agradecimento.style.display = 'flex'
obrigada.style.display = 'block'

})

continuar.addEventListener('mouseup', function(){
    document.querySelectorAll('input').forEach(input => {
        input.value = ''; 
    });
formulario.style.display = 'flex'
agradecimento.style.display = 'none'
obrigada.style.display = 'none'

})


