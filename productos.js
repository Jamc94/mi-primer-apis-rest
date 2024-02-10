const {Router} = require('express')
const router = Router()

router.get('/productos', (request, response) => {
  // consultar una base de datos
  response.send('Productos del servidor')
})

router.post('/productos', (request, response) => {
  
  // guardar en la base de datos 
  response.send('creando productos')
})

router.put('/productos', (request, response) => {

  // actualizar en la base de datos
  response.send('actualizando productos')
})

router.delete('/productos', (request, response) => {
  // eliminar en la base de datos
  response.send('eliminando productos')
})

module.exports = router
