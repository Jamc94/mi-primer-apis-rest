const {Router} = require('express')
const router = Router()

router.get('/categorias', (request, response) => {
  response.send('categorias del servidor')
})

router.post('/categorias', (request, response) => {
    response.send('creando del categorias')
})

router.put('/categorias', (request, response) => {
    response.send('actualizando categorias')
})

router.delete('/categorias', (request, response) => {
    response.send('eliminando del categorias')
})

module.exports = router