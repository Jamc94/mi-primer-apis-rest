const express = require("express")
const app = express()

const productos = require('./productos')
const categorias = require('./categorias')
const usuarios = require("./usuarios")
const facturas = require("./facturas")
const noticias = require("./noticias")

app.use(productos)
app.use(categorias)
app.use(usuarios)
app.use(facturas)
app.use(noticias)

app.listen(3000);