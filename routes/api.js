const express = require('express');
const router = express.Router();

const Produto = require('../models/produto');

Produto.methods(['get', 'put', 'post', 'delete']);
Produto.register(router, '/produtos');

module.exports = router;