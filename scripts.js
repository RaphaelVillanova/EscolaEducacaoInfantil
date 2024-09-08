document.getElementById('cadastro-evento').addEventListener('submit', function(event) {
    const nomeEvento = document.getElementById('nomeEvento').value;
    const dataEvento = document.getElementById('dataEvento').value;
    const descricao = document.getElementById('descricao').value;

    if (nomeEvento === "" || dataEvento === "" || descricao === "") {
        alert("Preencha todos os campos.");
        event.preventDefault();
    } else { 
        alert("Evento cadastrado!");
    }
});

document.getElementById('cadastro-pessoa').addEventListener('submit', function(event){ 
    const nome = document.getElementById('nome').value;
    const cargo = document.getElementById('cargo').value;
    const email = document.getElementById('email').value;

    if (nome === "" || cargo === "" || email === "") {
        alert("Preencha todos os campos.");
        event.preventDefault();
    } else {
        alert("Pessoa cadastrada!");
    }
});