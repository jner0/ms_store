const { Schema, model } = require("mongoose");

const OrdenSchema = Schema({
  fecha: {
    type: Date,
    default: Date.now,
  },
  total: {
    type: Number,
  },
  cliente: {
    type: Schema.Types.ObjectId,
    ref: "Cliente",
    required: true,
  },
  articulo: {
    type: Schema.Types.ObjectId,
    ref: "Articulo",
    required: true,
  },
});

//Para que al momento de realizar la peticion no me muestre visualmenteen la respuesta ni la version ni la password
OrdenSchema.methods.toJSON = function () {
  const { __v, ...data } = this.toObject();
  return data;
};

module.exports = model("Orden", OrdenSchema);
