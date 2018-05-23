//Dependencias
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Conexão MongoDB
mongoose.connect('mongodb://localhost/es2node');

//Express
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); 

//Rotas
app.use('/api', require('./routes/api'));

//Inicia o servidor
app.listen(3000);
console.log('Rodando na porta 3000');
