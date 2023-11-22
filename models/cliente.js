const { Schema, model } = require("mongoose");

const ClienteSchema = Schema({
  nombre: {
    type: String,
    required: [true, "El nombre es obligatorio"],
  },
  apellidos: {
    type: String,
    required: [true, "El apellido es obligatorio"],
  },
  direccion: {
    type: String,
    required: [true, "La direccion es obligatoria"],
  },
  correo: {
    type: String,
    required: [true, "El correo es obligatorio"],
    unique: true,
  },
  telefono: {
    type: String,
    required: [true, "El telefono es obligatorio"],
  },
});

//Para que al momento de realizar la peticion no me muestre visualmenteen la respuesta ni la version ni la password
ClienteSchema.methods.toJSON = function () {
  const { __v, _id, ...cliente } = this.toObject();
  cliente.uid = _id;
  return cliente;
};

module.exports = model("Cliente", ClienteSchema);
