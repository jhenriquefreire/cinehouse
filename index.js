const cinema = 'Cinehouse'
const xuxa = require('./primeiroModulo')
const filmes = []
const filmeUm = {
    codigo: 001,
    titulo: 'Um homem e onze segredos',
    duracao: 2,
    atores: ['Roberto Denilson', 'Leonardo DasCabra', 'Emme Branca'],
    anoLancamento: 1992,
    emCartaz: true
}
filmeUm.diretor = 'Quentinho Tarantella'

filmes.push(filmeUm)

console.log(filmes)