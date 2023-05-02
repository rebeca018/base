// divListaProduto.insertAdjacentHTML('afterbegin', '');

class Produto{
    constructor(nome, data_cadastro, descricao, preco){
        this.nome = nome;
        this.data_cadastro = data_cadastro;
        this.descricao = descricao;
        this.preco = preco;
    }
    mostrar_produto(){
        return this.nome +  this.data_cadastro + this.descricao + this.preco;
    }
}

class ProdutoDestaque extends Produto{
    constructor(nome, data_cadastro, descricao, preco, produto_destaque){
        super(nome, data_cadastro, descricao, preco);
        this.produto_destaque = produto_destaque;
    }
    mostrar_produto_destaque(){
        return this.nome +  this.data_cadastro + this.descricao + this.preco + this.produto_destaque;
    }
}

const produto = new ProdutoDestaque("Estilhaça-me", "19/04/2023", "Livro", 23.99, "https://m.media-amazon.com/images/I/41VestZBywL._SX339_BO1,204,203,200_.jpg" );
console.log(produto.mostrar_produto_destaque());