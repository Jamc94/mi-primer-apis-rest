const {Router} = require('express')
const router = Router()

router.get("/facturas", (request, response) => {
    response.send("facturas del servidor")
  })
  
router.post("/facturas", (request, response) => {
    response.send("creando facturas")
  })
  
router.put("/facturas", (request, response) => {
    response.send("actualizando facturas")
  })
  
router.delete("/facturas", (request, response) => {
    response.send("eliminando facturas")
  })
  
module.exports = router
  