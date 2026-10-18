// Função para atualizar as horas em tempo real
function atualizarHora() {
    const agora = new Date();
    
    let h = String(agora.getHours()).padStart(2, '0');
    let m = String(agora.getMinutes()).padStart(2, '0');
    let s = String(agora.getSeconds()).padStart(2, '0');

    document.getElementById('relogio').innerText = h + ":" + m + ":" + s;
}

// Atualiza imediatamente e depois a cada 1 segundo (setInterval)
atualizarHora();
setInterval(atualizarHora, 1000);

// Clique para alternar o modo claro/escuro
document.getElementById('botao-tema').addEventListener('click', function() {
    document.body.classList.toggle('escuro');
});