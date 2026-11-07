// Este array funciona como o nosso banco de dados de produtos
const produtos = [
    { id: 1, nome: "Cupcake de Chocolate", preco: 8.50, imagem: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=200&q=80" },
    { id: 2, nome: "Cupcake de Morango", preco: 9.00, imagem: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&w=200&q=80" },
    { id: 3, nome: "Cupcake de Baunilha", preco: 7.50, imagem: "https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&w=200&q=80" }
];

let carrinho = [];

// Função para exibir os produtos na tela
function renderizarProdutos() {
    const vitrine = document.getElementById('lista-produtos');
    vitrine.innerHTML = '';

    produtos.forEach(produto => {
        vitrine.innerHTML += `
            <div class="produto-card">
                <img src="${produto.imagem}" alt="${produto.nome}">
                <h3>${produto.nome}</h3>
                <p>R$ ${produto.preco.toFixed(2)}</p>
                <button onclick="adicionarAoCarrinho(${produto.id})">Adicionar</button>
            </div>
        `;
    });
}

// Função para adicionar itens ao carrinho
function adicionarAoCarrinho(idProduto) {
    const produto = produtos.find(p => p.id === idProduto);
    carrinho.push(produto);
    atualizarCarrinho();
}

// Função para atualizar o visual do carrinho
function atualizarCarrinho() {
    const listaCarrinho = document.getElementById('itens-carrinho');
    const valorTotal = document.getElementById('valor-total');
    
    listaCarrinho.innerHTML = '';
    let total = 0;

    if (carrinho.length === 0) {
        listaCarrinho.innerHTML = '<p>O carrinho está vazio.</p>';
    } else {
        carrinho.forEach((item, index) => {
            total += item.preco;
            listaCarrinho.innerHTML += `
                <li>
                    ${item.nome} 
                    <span>R$ ${item.preco.toFixed(2)}</span>
                </li>
            `;
        });
    }
    
    valorTotal.innerText = total.toFixed(2);
}

// Função para enviar o pedido para o WhatsApp
function finalizarCompra() {
    if (carrinho.length === 0) {
        alert("Adicione produtos ao carrinho primeiro!");
        return;
    }

    let textoPedido = "Olá! Gostaria de fazer o seguinte pedido:%0A%0A";
    let total = 0;

    carrinho.forEach(item => {
        textoPedido += `- ${item.nome} (R$ ${item.preco.toFixed(2)})%0A`;
        total += item.preco;
    });

    textoPedido += `%0A*Total: R$ ${total.toFixed(2)}*`;

    // INSIRA SEU NÚMERO DE WHATSAPP ABAIXO (com código do país e DDD, sem espaços. Ex: 5516999999999)
    const numeroWhatsApp = "5516999999999"; 
    const url = `https://wa.me/${numeroWhatsApp}?text=${textoPedido}`;
    
    window.open(url, '_blank');
}

// 6. Função para esvaziar o carrinho
function limparCarrinho() {
    if (carrinho.length === 0) {
        alert("O carrinho já está vazio!");
        return;
    }
    
    carrinho = []; // Zera a lista
    atualizarCarrinho(); // Manda a tela atualizar
}


// Inicia a loja ao abrir a página
renderizarProdutos();
