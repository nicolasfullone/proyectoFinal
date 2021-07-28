const pool = require('../utils/bd');
const T_CATEGORIAS = "categorias";
const T_PRODUCTOS = "productos";


const getAll = async() => {
    const query = "SELECT * FROM ??";
    const params = [T_CATEGORIAS];
    return await  pool.query(query, params);
}

const getSingle = async(id) =>{
    const query = "SELECT nombre FROM ?? WHERE id_categoria = ?";
    const params = [T_PRODUCTOS, id]; // ? representa una variable // ?? tabla
    return await pool.query(query, params);
}







module.exports = {getAll, getSingle}; 