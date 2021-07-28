const express = require ('express');
const router = express.Router();
const sha1 = require('sha1');
const {v4: uuid} = require('uuid');
const {getAll, getSingle, crearUsuario, verifyM} = require("./../models/usuarios");
const {send} = require('../services/mail');




const getTodos = async(req, res) =>{
    const usuarios = await getAll();
    console.log(usuarios);
    res.render('usuarios', {usuarios});
}

const single = async(req, res) => {
    const {id} = req.params;
    const [usuario] = await getSingle(id);
    console.log(usuario, id);
    res.render('usuario', {usuario});
}

const showRegistro = (req, res) => {
    res.render('createUsuario');
}

const registro = async(req, res) => {
    const newUser = req.body;
    console.log(newUser);
    const uid = uuid();
    console.log(uid);           //SI LO MUESTRA
    const finalUser = {
        username: newUser.username,
        pass: sha1(newUser.pass),
        email: newUser.email,
        confirmacionCorreo: uid,
    }
    console.log(finalUser);
    const creado = await crearUsuario(finalUser);
    console.log(creado);
    send({mail : finalUser.email,
             cuerpo : 
                    `<h1>Bienvenido ${finalUser.username}</h1>
                    <a href=http://localhost:3000/registro/verify/${finalUser.confirmacionCorreo}>Link magico para registrarse</a>`});
    res.redirect('/usuarios');
}

const verify = (req, res) => {
    //const uid = req.params.uid;
    const uid = req.param.uid;
    console.log(uid);
   
    //res.render('bienvenido');
    /*const messageId = await model.verifyM(uid);
    res.redirect('/productos');*/
}






router.get('/', getTodos);
router.get('/single/:id', single);
router.get('/registro', showRegistro);
router.post('/registro', registro);
router.get('/verify/:uid', verify);
module.exports = router;


