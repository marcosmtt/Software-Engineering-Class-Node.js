const restful = require('node-restful');
const mongoose = restful.mongoose;

const produtoSchema = new mongoose.Schema({
    nome: String,
    preco: Number
});

module.exports = restful.model('Produtos', produtoSchema);