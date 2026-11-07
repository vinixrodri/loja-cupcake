# 🧁 Cupcake Joy

Uma aplicação web simples e responsiva para uma loja virtual de cupcakes. O site permite que os clientes naveguem pelos produtos, adicionem itens ao carrinho e finalizem o pedido enviando a lista de compras automaticamente para o WhatsApp da loja.

## 🚀 Funcionalidades

- **Vitrine Dinâmica:** Exibição de produtos (nome, foto e preço) gerados a partir do JavaScript.
- **Carrinho de Compras Interativo:** Adição de itens, cálculo automático do valor total e botão para limpar o carrinho.
- **Integração com WhatsApp:** Ao finalizar a compra, o pedido é formatado em texto e enviado diretamente para o WhatsApp do vendedor.
- **Layout Responsivo:** O site se adapta a telas de celulares, tablets e computadores.

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação da página e dos elementos da loja.
- **CSS3:** Estilização, cores e design responsivo (Flexbox).
- **JavaScript Vanilla:** Lógica do carrinho, renderização dos produtos e envio de dados para o WhatsApp.
- **GitHub Pages:** Hospedagem gratuita da aplicação.

## 🌐 Como Acessar

O projeto está hospedado no GitHub Pages. Você pode acessar a loja funcionando através do link abaixo:

> https://vinixrodri.github.io/loja-cupcake/

## 💻 Como Funciona o Código

O projeto é dividido em três arquivos principais:
1. `index.html`: Contém a estrutura principal da página, cabeçalho e a divisão entre a vitrine e a barra lateral do carrinho.
2. `style.css`: Define toda a identidade visual, garantindo que os "cards" dos cupcakes e o carrinho fiquem alinhados e bonitos.
3. `script.js`: Onde o "banco de dados" de produtos está armazenado em um Array. Ele controla as funções de `adicionarAoCarrinho()`, `limparCarrinho()`, `atualizarCarrinho()` e `finalizarCompra()`.

---
*Projeto desenvolvido para facilitar a venda e o atendimento de pedidos de forma rápida e direta.*
