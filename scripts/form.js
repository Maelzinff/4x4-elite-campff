document.getElementById('form-inscricao').addEventListener('submit', function(e) {
  e.preventDefault();

  const nomeTime = document.getElementById('nomeTime').value.trim();
  const jogadores = document.getElementById('jogadores').value.trim();
  const discord = document.getElementById('discord').value.trim();
  const comprovante = document.getElementById('comprovante').value.trim();

  if (!nomeTime || !jogadores || !discord || !comprovante) {
    alert('Preencha todos os campos!');
    return;
  }

  let inscritos = JSON.parse(localStorage.getItem('inscritos') || '[]');
  if (inscritos.length >= 16) {
    alert('Limite de 16 equipes atingido.');
    return;
  }

  inscritos.push({ nomeTime, jogadores, discord, comprovante, data: new Date().toLocaleString() });
  localStorage.setItem('inscritos', JSON.stringify(inscritos));

  alert('Inscrição enviada com sucesso!');
  this.reset();
});
