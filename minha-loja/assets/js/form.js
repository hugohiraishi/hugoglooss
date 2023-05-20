let form = document.getElementById("form-submit");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    var nome = document.getElementById("form-nome").value;
    var telefone = document.getElementById("form-tel").value;
    var email = document.getElementById("form-email").value;
    var comentario = document.getElementById("form-comentario").value;
    var texto = document.getElementById("texto-retorno");

    contato = {
        "nome": nome,
        "telefone": telefone,
        "email": email,
        "comentario": comentario
    }

    if (localStorage.getItem("contatos") == null) {
        localStorage.setItem("contatos", JSON.stringify([contato]));

    } else {
        let contatos = JSON.parse(localStorage.getItem("contatos"));
        contatos.push(contato);
        localStorage.setItem("contatos", JSON.stringify(contatos));
    }

    texto.innerHTML += `
        <h4 class="text-success">Sua solicitação de contato foi enviada com sucesso!</h4>
    `;

});