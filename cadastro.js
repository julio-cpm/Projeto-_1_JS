let filmes = [];

//Cadastro
document.getElementById("btnCadastrar").addEventListener("click", cadastrarFilme);

//Filtros
document.getElementById("btnFiltrarClassificacao").addEventListener("click", filtrarClassificacao);
document.getElementById("btnFiltrarAno").addEventListener("click", filtrarAno);

//Funções
function cadastrarFilme() {
    let titulo = document.getElementById("titulo").value;
    let ano = document.getElementById("ano").value;
    let classificacao = document.getElementById("classificacao").value;

    //Validação
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
    limparCampos();
    exibirFilmes(filmes);
}

function exibirFilmes(lista) {
    let texto = lista.map(f => `${f.titulo} (${f.ano}) - Classificação: ${f.classificacao}`).join("<br>");
    document.getElementById("listaFilmes").innerHTML = texto;
}

function limparCampos() {
    document.getElementById("titulo").value = "";
    document.getElementById("ano").value = "";
    document.getElementById("classificacao").value = "";
}

//Filtros
//
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
