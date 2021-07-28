var express = require('express');
var router = express.Router();

/* GET users listing. */
const users = [
  {
    id: 1,
    nombre: 'Nicolas',
    apellido: 'Fullone'
  },
  {
    id: 2,
    nombre: 'Agustin',
    apellido: 'Riquelme'
  },
  {
    id: 3,
    nombre: 'Mario',
    apellido: 'Pietras'
  },
]



const listar = (req, res) => {
  res.render('users', {users})
}

const single = (req, res) => {
  const {id} = req.params;
  console.log(id);
  const user = users.find((user) => user.id == id);
  res.render('single', {user});
}

router.get('/', listar);
router.get('/single/:id', single);



module.exports = router;
