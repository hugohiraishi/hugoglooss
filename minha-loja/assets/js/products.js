
let dados = {};
(async () => {
    dados = await fetch('products.json').then(response => {
        return response.json();
    }).then(r => {
        return r;
    }).catch(err => {
        const app = document.querySelector('#list-products');
        app.innerHTML +=
        `<div class="">
            <p>Infelizmente não foi possível mostrar os produtos!</p>
        </div>`

    });
    products = dados.products.filter(p => p.active == true);
    let listProducts = document.getElementById("list-products");

    for(let produto of products){
        listProducts.innerHTML += `<div class="col-12 col-sm-3 col-md-2 m-1 d-flex m-4">
                <div class="card">
                    <img src="${produto.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${produto.name}</h5>
                      <p class="card-text">R$${produto.price}</p>
                      <a href="${produto.link}" target="_blank" class="btn btn-primary">Detalhes</a>
                    </div>
                </div>
            </div>`
    }
})();