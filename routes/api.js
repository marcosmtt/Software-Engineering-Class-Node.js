const express = require('express');
const router = express.Router();

router.get('/produtos', function(req, res){
    res.send('Bombando!');
})

module.exports = router;