

const { Router } = require('express');
const { usuariosGet, usuariosPost, usuariosPut, usuariosPatch, deleteUsuarios } = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGet );

router.post('/', usuariosPost );

router.put('/:id', usuariosPut );

router.patch('/', usuariosPatch);

router.delete('/', deleteUsuarios);

module.exports = router;


