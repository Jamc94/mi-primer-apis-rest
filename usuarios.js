const {Router} = require('express')
const router = Router()

router.get("/usuarios", (request, response) => {
    response.send("Usuarios del servidor")
  })
  
router.post("/usuarios", (request, response) => {
    response.send("creando usuarios")
  })
  
router.put("/usuarios", (request, response) => {
    response.send("actualizando usuarios")
  })
  
router.delete("/usuarios", (request, response) => {
    response.send("eliminado usuarios")
  })

module.exports = router