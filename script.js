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
            <div>${this.nome}</div>
            <div>${this.data_cadastro}</div>
            <div>${this.discricao}</div>
            <div>${this.preco}</div>

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
            <div>${this.nome}</div>
            <div>${this.data_cadastro}</div>
            <div>${this.discrição}</div>
            <div>${this.preco}</div>
            <div>${this.imagem_produtoD}</div>

        `;
        
        //return this.nome +  this.data_cadastro + this.descricao + this.preco + this.imagem_produtoD;
    }
}

const produto = new ProdutoDestaque("Estilhaça-me", "19/04/2023", "Livro", 23.99, "https://m.media-amazon.com/images/I/41VestZBywL._SX339_BO1,204,203,200_.jpg" );
console.log(produto.mostrar_produto_destaque());
const div = document.getElementById('produto-destaque');
div.insertAdjacentHTML('afterbegin', produto.mostrar_produto_destaque());


const produto2 = new Produto("Legend", "03/05/2023", "Livro", 18.05);
console.log(produto2.mostrar_produto());

const produto3 = new ProdutoDestaque("Six of Crows", "03/05/2023", "Livro", 29.99, "https://m.media-amazon.com/images/I/51ku0tEgIcL._SY346_.jpg");
console.log(produto3.mostrar_produto_destaque());

const produto4 = new Produto("Jogos de Herança", "03/05/2023", "Livro", 37.92);
console.log(produto4.mostrar_produto());



// Estrutura inicial:
// <div id="one">one</div>
/*
var p1 = document.getElementById('one');
p1.insertAdjacentHTML('afterend', '<div id="two">two</div>');
*/
// Neste ponto, a nova estrutura é:
// <div id="one">one</div>
// <div id="two">two</div>
