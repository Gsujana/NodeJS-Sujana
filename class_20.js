const {readFileSync, writeFileSync, appendFileSync, stat} = require('fs')

const first = readFileSync('./textfiles/second.txt', 'utf8')

console.log(first)

appendFileSync('./textfiles/fourth.txt', 'Hi there thisis not boring 2', 'utf8')
