const cotacaoDoDolar = 5.27;
const cotacaoDoReal = 0.19;
const cotacaoDoBitCoinEmReal = 116097.9;

function conversorEmReal() {
  const input = document.getElementById("input").value;
  document.getElementById("saida");
  const valorEmReal = cotacaoDoDolar * input;

  saida.innerHTML += `<p> ${input}$ esta a R$${valorEmReal} </p>`;
}

function conversorEmDolar() {
  const input = document.getElementById("input").value;
  const saida = document.getElementById("saida");
  const valorEmDolar = cotacaoDoReal * input;

  if (input.length === 0) {
    alert("Digite um numero antes");
    return;
  }
  saida.innerHTML += `<p> R$${input} esta a ${valorEmDolar}$ </p>`;
}

function conversorDeBitcoin() {
  const input = document.getElementById("input").value;
  const saida = document.getElementById("saida");
  const valorEmBitcoin = cotacaoDoBitCoinEmReal * input;

  if (input.length === 0) {
    alert("Digite um numero antes");
    return;
  }

  saida.innerHTML += `<p> R$${input} esta a ${valorEmBitcoin} BTC </p>`;
}
