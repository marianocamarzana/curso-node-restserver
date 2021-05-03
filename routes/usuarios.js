

const { Router } = require('express');
const { check } = require('express-validator');
const Role = require('../models/role');

const { usuariosGet, usuariosPost, usuariosPut, usuariosPatch, deleteUsuarios } = require('../controllers/usuarios');

const { validarCampos } = require('../middlewares/validar-campos');
const { esRoleValido, emailExiste, existeusuarioPorId } = require('../helpers/db-validators');

const router = Router();

router.get('/', usuariosGet );

router.put('/:id', [
        check('id', 'No es un ID valido').isMongoId(),
        check('id').custom( existeusuarioPorId ),
        check('rol').custom( esRoleValido ),
        validarCampos
], usuariosPut );

router.post('/', [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('password', 'El password debe tener mas de 6 caracteres').isLength({ min:6 }),
        check('correo', 'El correo no es válido').isEmail(),
        check('correo').custom( emailExiste),
        check('rol').custom( esRoleValido ),
        validarCampos
        ], usuariosPost );

router.patch('/', usuariosPatch);

router.delete('/:id', [
        check('id', 'No es un ID valido').isMongoId(),
        check('id').custom( existeusuarioPorId ),
        validarCampos
], deleteUsuarios);

module.exports = router;


