const nome = "Camila";
let nome2 = ""
let pessoaDefault = {
    nome: "Camila",
    idade: "29",
    trabalho: "Programadora"
}

let nomes = ["Marcelo", "Silva", "Rafael"];
let pessoas =  [
    {
        nome: "Marcelo",
        idade: "33",
        trabalho: "programador"
    },
    {
        nome: "Silva",
        idade: "30",
        trabalho: "programador"
    }
        
];



function alterarNome() {
    nome2 = "Maria Silva"
    console.log("valor alterado:");
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebe um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);

    console.log("Idade:");
    console.log(pessoa.idade);

    console.log("Trabalho:");
    console.log(pessoa.trabalho);
}


function adicionarPesssoas(pessoa) {
    pessoas.push(pessoa);
}

function imprimirPessoas() {
    pessoas.forEach((iten)=> {
        console.log("nome:");
        console.log(iten.nome);

        console.log("Nome:");
        console.log(iten.nome);

        console.log("Idade:");
        console.log(iten.idade);

        console.log("Trabalho:");
        console.log(iten.trabalho);
    })
}

imprimirPessoas();

adicionarPesssoas({
    nome: "pEDRO sILVA",
    IDADE: "28",
    TRABALO: "PAPELEIRO"
})

console.log(pessoas);





//recebeEalteraNome("João Pereira");
//recebeEalteraNome("Maria Silva");


//alterarNome();    