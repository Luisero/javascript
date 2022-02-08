//g de global (encontra todas as ocorrencias)
// i de insensitive 

const {texto} = require('./base')

const regEx1 = /teve 5 filhos/gi;

console.log(regEx1.test(texto))

