const { response } = require("express");
const Cliente = require("../models/cliente");

const crearCliente = async (req, res = response) => {
  const { nombre, apellidos, direccion, correo, telefono } = req.body;

  const cliente = new Cliente({
    nombre,
    apellidos,
    direccion,
    correo,
    telefono,
  });

  await cliente.save();
  res.status(201).json({
    cliente,
  });
};

const obtenerClientes = async (req, res = response) => {
  const [clientes] = await Promise.all([Cliente.find()]);

  res.json({ clientes });
};

const actualizarCliente = async (req, res = response) => {
  const { id } = req.params;
  const { _id, ...resto } = req.body;

  const cliente = await Cliente.findByIdAndUpdate(id, resto, { new: true });

  res.json({
    msg: "Actualizado correctamente",
    cliente,
  });
};

const eliminarCliente = async (req, res = response) => {
  const { id } = req.params;

  const cliente = await Cliente.findByIdAndDelete(id);

  res.json({ msg: "Eliminado correctamente", cliente });
};

module.exports = {
  crearCliente,
  obtenerClientes,
  actualizarCliente,
  eliminarCliente,
};
