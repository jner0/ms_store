const { Schema, model } = require("mongoose");

const ArticuloSchema = Schema({
  nombre: {
    type: String,
    required: [true, "El nombre es obligatorio"],
    unique: true,
  },
  precio: {
    type: Number,
    default: 0,
  },
  descripcion: {
    type: String,
  },
});

//Para que al momento de realizar la peticion no me muestre visualmenteen la respuesta ni la version ni la password
ArticuloSchema.methods.toJSON = function () {
  const { __v, ...data } = this.toObject();
  return data;
};

module.exports = model("Articulo", ArticuloSchema);
