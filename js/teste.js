// Botões "Comprar"
const botoesCompra = document.querySelectorAll(".produto-card button");

botoesCompra.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.stopPropagation(); // Evita clicar no card junto
        alert("Produto adicionado ao carrinho!");
    });
});

// Clique no card inteiro
const cards = document.querySelectorAll(".produto-card");

cards.forEach((card) => {
    card.addEventListener("click", () => {
        console.log("Você clicou no produto:", card.querySelector("h3").innerText);
    });
});
