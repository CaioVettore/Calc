var inputElement = document.getElementById('visor');

//Função de cada botão numerico
function pressionado(num) {
        inputElement.value += num;
}
//Relação dos botões de operações
function operacao(op) {
        inputElement.value += op;
}
//printar resultado
function resultado() {
        inputElement.value = eval(inputElement.value);
}
function limpa(){
        document.getElementById('visor').value = '';
     }