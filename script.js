const cotacaoDoDolar = 5.27;
const cotacaoDoReal = 0.19;
const cotacaoDoBitCoinEmReal = 116097.9;
const modal = document.getElementById("myModal");
const  btn = document.getElementById("myBtn");
const  span = document.getElementsByClassName("close")[0]

function conversorEmReal() {
  const input = document.getElementById("input").value;
  document.getElementById("saida");
  const valorEmReal = cotacaoDoDolar * input;

  if (input.length === 0) {
    alert("Digite um numero antes");
    return;
  }


  saida.innerHTML += `<p> ${input}$ esta a R$${valorEmReal.toFixed(2)} </p>`;
}

function conversorEmDolar() {
  const input = document.getElementById("input").value;
  const saida = document.getElementById("saida");
  const valorEmDolar = cotacaoDoReal * input;

  if (input.length === 0) {
    alert("Digite um numero antes");
    return;
  }

  

  saida.innerHTML += `<p> R$${input} esta a ${valorEmDolar.toFixed(2)}$ </p>`;
  
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


;


btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


