formContato = document.getElementById('form-submit')

formContato.addEventListener('submit', function(event){
    event.preventDefault();
    nome = document.getElementById('nome').value 
    email = document.getElementById('email')
    comentario = document.getElementById('comentario')

    contato = {
        "nome": nome.value,
        "email": email.value,
        "contato": contato.value
    }
    if(localStorage.getItem('contatos') == null){
        localStorage.setItem('contatos', JSON.stringify([contato]))
    }
    else{
        contatos = JSON.parse(localStorage.getItem('contatos'))
        contatos.push(contato)
        localStorage.setItem('contatos',JSON.stringify(contato))
    }
    








    console.log(contato);
});
console.log("Tesste Contato")