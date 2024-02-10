const {Router} = require('express')
const router = Router()

router.get("/noticias", (request, response) => {
    response.send("noticias del servidor")
})

router.post("/noticias", (request, response) => {
    response.send("creando noticias")
})

router.put("/noticias", (request, response) => {
    response.send("actualizando noticias")
})

router.delete("/noticias", (request, response) => {
    response.send("eliminado noticias")
})

module.exports = router