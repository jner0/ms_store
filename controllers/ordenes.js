const { response } = require("express");
const Orden = require("../models/orden");

const crearOrden = async (req, res = response) => {
  const { fecha, total, cliente, articulo } = req.body;

  const orden = new Orden({
    fecha,
    total,
    cliente,
    articulo,
  });

  await orden.save();
  res.status(201).json({
    orden,
  });
};

const obtenerOrdenes = async (req, res = response) => {
  const [ordenes] = await Promise.all([
    Orden.find().populate("cliente", "nombre").populate("articulo", "nombre"),
  ]);

  res.json({ordenes});
};

module.exports = {
  crearOrden,
  obtenerOrdenes,
};
