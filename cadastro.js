let filmes = [];

//Cadastro
document.getElementById("btnCadastrar").addEventListener("click", cadastrarFilme);
//document é o "tronco principal" que te dá acesso a todas as "folhas", podendo achar e mudar coisas no html.
//getElementById é a maneira de identificar o elemento pelo id do html para que voce possa mudar elas.

//Filtros
document.getElementById("btnFiltrarClassificacao").addEventListener("click", filtrarClassificacao);
document.getElementById("btnFiltrarAno").addEventListener("click", filtrarAno);

//Funções

    //Validação
function cadastrarFilme() {
    let titulo = document.getElementById("titulo").value;    
    let ano = document.getElementById("ano").value;
    let classificacao = document.getElementById("classificacao").value;
    //value serve para pegar informação que está guardada dentro dele.
    
    if (titulo === "" || ano === "" || classificacao === "") {
        alert("Preencha todos os campos");
        return;
    }

    let filme = {
        titulo: titulo,
        ano: Number(ano),
        classificacao: classificacao
    };

    filmes.push(filme);
    //push é um metodo usado para adicionar um item ao final de uma lista
    limparCampos();
    exibirFilmes(filmes);
}

function exibirFilmes(lista) {
    let texto = lista.map(f => `${f.titulo} (${f.ano}) - Classificação: ${f.classificacao}`).join("<br>");
    //map é um comando usado para transformar todos os itens de uma lista (array) de uma vez só
    //join é um comando usado para juntar todos os itens de uma lista (array) e transformá-los em uma única frase
    document.getElementById("listaFilmes").innerHTML = texto;
}

function limparCampos() {
    document.getElementById("titulo").value = "";
    document.getElementById("ano").value = "";
    document.getElementById("classificacao").value = "";
}

//Filtros
function filtrarClassificacao() {
    let filtro = document.getElementById("filtroClassificacao").value;
    let resultado = filmes.filter(f => f.classificacao === filtro)
    exibirFilmes(resultado);
}

function filtrarAno() {
    let filtro = Number(document.getElementById("filtroAno").value);
    let resultado = filmes.filter(f => f.ano === filtro)
    exibirFilmes(resultado);
}
