let catalogo = require('./database/catalogo.json')

function adicionarFilme (cod, tit,dur, att, ala, car){
    let filme = {
        codigo: cod,
        titulo: tit,
        duracao: dur,
        atores: att,
        anoLancamento: ala,
        emCartaz: car
    }
    catalogo.push(filme)
}

function buscarFilme(filme){
    let busca = catalogo.indexOf(filme)
    return catalogo[busca]
}

function emCartaz(filme){
    if (filme.emCartaz){
        filme.emCartaz = false
    }
    else{
        filme.emCartaz = true
    }
}

emCartaz(catalogo[1])
console.log(catalogo)