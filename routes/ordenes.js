const { Router } = require("express");
const { crearOrden, obtenerOrdenes } = require("../controllers/ordenes");

const router = Router();

router.get("/", obtenerOrdenes);
router.post("/", crearOrden);

module.exports = router;
