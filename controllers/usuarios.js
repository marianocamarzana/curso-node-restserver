const { response, request } = require('express')

const usuariosGet = (req = request, res = response) => {  

    const { q, nombre = 'No name', apikey, page = 1, limit } = req.params;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
};

const usuariosPost = (req, res = response) => {

    const { nombre, edad} = req.body;

    res.json({
        msg: 'post API - controlador',
        nombre,
        edad
    });
};

const usuariosPut = (req, res = response) => {

    const id = req.params.id;

    res.json({
        msg: 'put API - controlador',
        id
    });
};

const usuariosPatch = (req, res = response ) => {
    res.json({
        msg: 'patch API'
    })
};

const deleteUsuarios = (req, res = response ) => {
    res.json({
        msg: 'del API - controlador'
    });
};

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    deleteUsuarios    
}