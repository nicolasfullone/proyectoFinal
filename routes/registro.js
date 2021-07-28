const express = require('express');
const router = express.Router();
const {send} = require('./../services/mail');


const register = (req, res) => {
    res.render('registro')
}

const create = (req, res) => {
    const {body : usuario} = req;// const usuario = req.body;
    console.log(usuario);
    send({mail : usuario.email, cuerpo : '<a href="">Link</a>'});
    res.redirect('/');
}




router.get('/', register);
router.post('/create', create);

module.exports = router; 