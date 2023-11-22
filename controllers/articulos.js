const { response } = require("express");
const Articulo = require("../models/articulo");

const crearArticulo = async (req, res = response) => {
  const { nombre, precio, descripcion } = req.body;

  const articulo = new Articulo({
    nombre,
    precio,
    descripcion,
  });

  await articulo.save();
  res.status(201).json({
    articulo,
  });
};

const obtenerArticulos = async (req, res = response) => {
  const [articulos] = await Promise.all([Articulo.find()]);

  res.json({articulos});
};

module.exports = {
  crearArticulo,
  obtenerArticulos,
};
