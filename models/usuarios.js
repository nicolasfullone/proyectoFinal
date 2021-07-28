const pool = require('./../utils/bd');
const T_USUARIOS = "usuarios";

const getAll = async() => {
    const query = "SELECT * FROM ??";
    const params = [T_USUARIOS];
    return await  pool.query(query, params);
}

const getSingle = async(id) =>{
    const query = "SELECT * FROM ?? WHERE id = ?";
    const params = [T_USUARIOS, id]; // ? representa una variable // ?? tabla
    return await pool.query(query, params);
}

const crearUsuario = async(obj) => {
    const query = "INSERT INTO ?? SET ?";
    const params = [T_USUARIOS, obj];
    return await pool.query(query, params);
}

const verifyM = async(uid) => {
    const query = "UPDATE ?? SET habilitado = 1 WHERE confirmacionCorreo = ?"
    const params = [T_USUARIOS, uid];
    return await pool.query(query, params);
}



module.exports = {getAll, getSingle, crearUsuario, verifyM};