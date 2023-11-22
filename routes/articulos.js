const { Router } = require("express");
const { crearArticulo, obtenerArticulos } = require("../controllers/articulos");

const router = Router();

router.get("/", obtenerArticulos);
router.post("/", crearArticulo);

module.exports = router;
