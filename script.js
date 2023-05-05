// divListaProduto.insertAdjacentHTML('afterbegin', '');

class Produto{
    constructor(nome, data_cadastro, descricao, preco){
        this.nome = nome;
        this.data_cadastro = data_cadastro;
        this.descricao = descricao;
        this.preco = preco;
    }
    mostrar_produto(){
        return `
            <div class="book-card">
            <div class="book-card-h4">${this.nome}</div>
            <div class="book-card-p">${this.data_cadastro}</div>
            <div class="book-card-p">${this.descricao}</div>
            <div class="book-card-p">${this.preco}</div>
            </div>
        `;
        //return this.nome +  this.data_cadastro + this.descricao + this.preco;
    }
}

class ProdutoDestaque extends Produto{
    constructor(nome, data_cadastro, descricao, preco, imagem_produtoD){
        super(nome, data_cadastro, descricao, preco);
        this.imagem_produtoD = imagem_produtoD;
    }
    mostrar_produto_destaque(){
        return `
            <div class="book-card">
            <img src="${this.imagem_produtoD}" class="book-card-img">
            <div class="book-card-h4">${this.nome}</div>
            <div class="book-card-p">${this.data_cadastro}</div>
            <div class="book-card-p">${this.descricao}</div>
            <div class="book-card-p">${this.preco}</div>
            </div>

        `;
        
        //return this.nome +  this.data_cadastro + this.descricao + this.preco + this.imagem_produtoD;
    }
}

const produto = new ProdutoDestaque("Estilhaça-me", "19/04/2023", "Livro", 23.99, "https://m.media-amazon.com/images/I/41VestZBywL._SX339_BO1,204,203,200_.jpg" );
console.log(produto.mostrar_produto_destaque());
const div = document.getElementById('produto-destaque');
div.insertAdjacentHTML('afterbegin', produto.mostrar_produto_destaque());


const produto2 = new ProdutoDestaque("Legend", "03/05/2023", "Livro", 18.05, "https://m.media-amazon.com/images/I/A13bJYSllML._AC_UL480_FMwebp_QL65_.jpg");
console.log(produto2.mostrar_produto_destaque());
const div2 = document.getElementById('produto-destaque');
div2.insertAdjacentHTML('afterbegin', produto2.mostrar_produto_destaque());


const produto3 = new ProdutoDestaque("Six of Crows", "03/05/2023", "Livro", 29.99, "https://m.media-amazon.com/images/I/51ku0tEgIcL._SY346_.jpg");
console.log(produto3.mostrar_produto_destaque());
const div3 = document.getElementById('produto-destaque');
div3.insertAdjacentHTML('afterbegin', produto3.mostrar_produto_destaque());


const produto4 = new ProdutoDestaque("Jogos de Herança", "03/05/2023", "Livro", 37.92, "https://m.media-amazon.com/images/I/81e98vyHFmS._AC_UL480_FMwebp_QL65_.jpg");
console.log(produto4.mostrar_produto_destaque());
const div4 = document.getElementById('produto-destaque');
div4.insertAdjacentHTML('afterbegin', produto4.mostrar_produto_destaque());



// Estrutura inicial:
// <div id="one">one</div>
/*
var p1 = document.getElementById('one');
p1.insertAdjacentHTML('afterend', '<div id="two">two</div>');
*/
// Neste ponto, a nova estrutura é:
// <div id="one">one</div>
// <div id="two">two</div>
