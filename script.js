// divListaProduto.insertAdjacentHTML('afterbegin', '');

class ErroProduto extends Error {
    constructor(message){
        super(message);
        this.name = "Erro Produto";         
    }
}


class Produto{
    constructor(nome, data_cadastro, descricao, preco){
        this.nome = nome;
        this.data_cadastro = data_cadastro;
        this.descricao = descricao;
        this.preco = preco;
    }

    mostrarAtributos(){
        try{
            return this.mostrar_produto();
        }catch (erro){
            console.log(erro.stack)
        }
    }

    mostrar_produto(){
        if (this.nome != "" && this.data_cadastro != "" && this.descricao != "" && this.preco != ""){
        return `
            <div class="book-card">
            <div class="book-card-h4">${this.nome}</div>
            <div class="book-card-p">${this.data_cadastro}</div>
            <div class="book-card-p">${this.descricao}</div>
            <div class="book-card-p">${this.preco}</div>
            </div>
        `;
        }else{
            throw new ErroProduto("Os dados do produto não estão preenchidos")
        }
        //return this.nome +  this.data_cadastro + this.descricao + this.preco;
    }
}

class ProdutoDestaque extends Produto{
    constructor(nome, data_cadastro, descricao, preco, imagem_produtoD){
        super(nome, data_cadastro, descricao, preco);
        this.imagem_produtoD = imagem_produtoD;
    }


    mostrar_produto_destaque(){
        if (this.imagem_produtoD != "" && this.nome != "" && this.data_cadastro != "" && this.descricao != "" && this.preco != ""){
        return `
            <div class="book-card-d">
            <img src="${this.imagem_produtoD}" class="book-card-img">
            <div class="book-card-h4">${this.nome}</div>
            <div class="book-card-p">${this.data_cadastro}</div>
            <div class="book-card-p">${this.descricao}</div>
            <div class="book-card-p">${this.preco}</div>
            </div>

        `;
        }else{
            throw new ErroProduto("Os dados do produto destaque não estão preenchidos")
        }
        //return this.nome +  this.data_cadastro + this.descricao + this.preco + this.imagem_produtoD;
    }
}

const produto = new ProdutoDestaque("Estilhaça-me", "19/04/2023", "Livro ", 23.99, "https://m.media-amazon.com/images/I/41VestZBywL._SX339_BO1,204,203,200_.jpg" );
console.log(produto.mostrar_produto_destaque());
const div = document.getElementById('produto-destaque');
div.insertAdjacentHTML('afterbegin', produto.mostrar_produto_destaque());


const produto2 = new Produto("", "03/05/2023", "E-book", 18.05);
console.log(produto2.mostrar_produto());
const div2 = document.getElementById('lista-produtos');
div2.insertAdjacentHTML('afterbegin', produto2.mostrar_produto());


const produto3 = new ProdutoDestaque("Six of Crows", "03/05/2023", "Livro Físico", 29.99, "https://m.media-amazon.com/images/I/51ku0tEgIcL._SY346_.jpg");
console.log(produto3.mostrar_produto_destaque());
const div3 = document.getElementById('produto-destaque');
div3.insertAdjacentHTML('afterbegin', produto3.mostrar_produto_destaque());


const produto4 = new Produto("Jogos de Herança", "03/05/2023", "E-book", 37.92);
console.log(produto4.mostrar_produto());
const div4 = document.getElementById('lista-produtos');
div4.insertAdjacentHTML('afterbegin', produto4.mostrar_produto());

const produto5 = new Produto("Um tom mais escuro de magia", "17/05/2023", "Livro Físico", 38.99);
console.log(produto5.mostrar_produto());
const div5 = document.getElementById('lista-produtos');
div4.insertAdjacentHTML('afterbegin', produto5.mostrar_produto());

const produto6 = new Produto("A seleção", "17/05/2023", "E-book", 34.90);
console.log(produto6.mostrar_produto());
const div6 = document.getElementById('lista-produtos');
div4.insertAdjacentHTML('afterbegin', produto6.mostrar_produto());
