const express = require('express')
const router = express.Router()
const controladorAutenticacion=require('../controladores/controladorAutenticacion.js')

//Rutas de autenticacion

router.post('/registrar', controladorAutenticacion.registrarUsuario);
router.post('/login', controladorAutenticacion.iniciarSesion);

module.exports=router;