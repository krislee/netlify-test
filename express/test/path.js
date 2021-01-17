const path = require('path')
const fs = require('fs')

console.log(__dirname)
const pathToKey = path.join(__dirname, 'app.js')
console.log("path:", pathToKey)

const PUB_KEY = fs.readFileSync(pathToKey, 'utf8')
console.log(PUB_KEY)

module.exports = {PUB_KEY}