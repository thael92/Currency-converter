
// Função para formatar número com pontos e vírgulas, incluindo "R$"
function formatarNumero(valor) {
    valor = valor.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
    valor = valor.replace(/(\d)(\d{2})$/, "$1,$2"); // Adiciona a vírgula antes dos dois últimos dígitos
    valor = valor.replace(/(?=(\d{3})+(\D))\B/g, "."); // Adiciona pontos a cada três dígitos
    return "R$ " + valor; // Adiciona o símbolo R$
}

// Evento para formatar o valor enquanto digita
document.querySelector('.input-currency').addEventListener('input', function (e) {
    let value = e.target.value;
    e.target.value = formatarNumero(value); // Atualiza o valor formatado no input
});

const convertButton = document.querySelector(".button-Convert")
const currencySelect = document.querySelector(".currency-select")


// Função para converter o valor de real para dólar

function convertValue() {
    const inputCurrencyValue = document.querySelector(".input-currency").value.replace(/R\$|\./g, "").replace(",", "."); // Remove "R$", pontos e substitui vírgula por ponto
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); // Valor em real
    const currencyValueConvert = document.querySelector(".currency-value"); // Valor em outras moedas

    const dolarToday = 5.83
    const euroToday = 6.05
    const bitcoinToday = 563.312
    const libraToday =7.27
    


    if (currencySelect.value == 'dolar') {
        currencyValueConvert.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == 'euro') {
        currencyValueConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR',
        }).format(inputCurrencyValue / euroToday)
    }
    if (currencySelect.value == 'bitcoin') {
        currencyValueConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'BTC',
        }).format(inputCurrencyValue / bitcoinToday)
    }
    if (currencySelect.value == 'libra') {
        currencyValueConvert.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP',
        }).format(inputCurrencyValue / bitcoinToday)
    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(inputCurrencyValue);

}
function changeCurrency(){
const currencyName=document.getElementById('currency-name')
const currencyImg=document.querySelector('.currency-img')
if (currencySelect.value == 'dolar'){
    currencyName.innerHTML= 'Dólar americano'
    currencyImg.src = './assets/Dolar-USD.png'
}
if (currencySelect.value == 'euro'){
    currencyName.innerHTML= 'Euro'
    currencyImg.src = "./assets/EURO.png" // Atualiza a imagem para Euro currencyImg.alt = "Imagem do Euro";}

}
if (currencySelect.value == 'bitcoin'){
    currencyName.innerHTML= 'Bticon'
    currencyImg.src = "./assets/Bitcoin.png" // Atualiza a imagem para Euro currencyImg.alt = "Imagem do Euro";}

}
if (currencySelect.value == 'libra'){
    currencyName.innerHTML= 'Libra'
    currencyImg.src = "./assets/Libra.png" // Atualiza a imagem para Euro currencyImg.alt = "Imagem do Euro";}

}
convertValue()
}
currencySelect.addEventListener('change', changeCurrency)
convertButton.addEventListener('click', convertValue)
