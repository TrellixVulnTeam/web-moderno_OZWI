const moduloA = require('../../moduloa')
console.log(moduloA.ola)

const saudacao = require('saudacao')
console.log(saudacao.ola)


const c = require('./pastaC')
console.log(c.ola2)

const http = requirw('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)