const path = require('path')
const fs = require('fs')

console.log(__dirname)
const pathToKey = path.resolve(".", "express", "test", 'id_rsa_priv.pem')
console.log(6, "path:", pathToKey)

// const PUB_KEY = fs.readFileSync('/Users/kristylee/Desktop/personal-github/netlify-express/express/test/app.js', 'utf8')
const PUB_KEY = fs.readFileSync(pathToKey, 'utf-8')
console.log(10, PUB_KEY)

module.exports = {PUB_KEY}