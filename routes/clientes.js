const { Router } = require("express");
const {
  crearCliente,
  obtenerClientes,
  actualizarCliente,
  eliminarCliente,
} = require("../controllers/clientes");

const router = Router();

router.get("/", obtenerClientes);
router.post("/", crearCliente);
router.put("/:id", actualizarCliente);
router.delete("/:id", eliminarCliente);

module.exports = router;
