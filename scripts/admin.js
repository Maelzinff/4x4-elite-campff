function verificarSenha() {
  const senha = document.getElementById("senha").value;
  if (senha === "Arthur2025") {
    document.getElementById("painel").style.display = "block";
    carregarInscricoes();
  } else {
    alert("Senha incorreta!");
  }
}

function carregarInscricoes() {
  const lista = document.getElementById("listaInscricoes");
  lista.innerHTML = "";
  const inscritos = JSON.parse(localStorage.getItem("inscritos") || "[]");

  inscritos.forEach((item, index) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${item.nomeTime}</h3>
      <p>Jogadores: ${item.jogadores}</p>
      <p>Discord: ${item.discord}</p>
      <p>Comprovante: <a href="${item.comprovante}" target="_blank">Ver</a></p>
      <p>Data: ${item.data}</p>
      <button onclick="apagar(${index})">Apagar</button>
      <hr/>
    `;
    lista.appendChild(div);
  });
}

function apagar(index) {
  let inscritos = JSON.parse(localStorage.getItem("inscritos") || "[]");
  if (confirm("Deseja apagar esta inscrição?")) {
    inscritos.splice(index, 1);
    localStorage.setItem("inscritos", JSON.stringify(inscritos));
    carregarInscricoes();
  }
}
