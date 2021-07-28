const express = require ('express');
const router = express.Router();
const {getAll, getSingle} = require('../models/categorias');


const getTodas = async(req, res) =>{
    const categorias = await getAll();
    console.log(categorias);   
    res.render('categorias', {categorias});
}

const single = async(req, res) => {
    const {id} = req.params;
    const [categoria] = await getSingle(id);
    console.log(categoria);
    //res.render('categoria', {categoria});
}







router.get('/', getTodas);
//router.get('/categorias/:id', single);
module.exports = router;