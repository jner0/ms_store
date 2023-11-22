const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.paths = {
      clientes: "/api/clientes",
      articulos: "/api/articulos",
      ordenes: "/api/ordenes",
    };

    //Conectar a base de datos
    this.conectarDB();

    //Middlewares
    this.middlewares();
    //Rutas de mi aplicacion
    this.routes();
  }

  async conectarDB() {
    await dbConnection();
  }

  middlewares() {
    //CORS
    this.app.use(cors());
    //lectura y parseo del body
    this.app.use(express.json());
    //Directorio publico
    // this.app.use(express.static("public"));
    // //FileUpload o carga de archivos
    // this.app.use(
    //   fileUpload({
    //     useTempFiles: true,
    //     tempFileDir: "/tmp/",
    //     createParentPath: true,
    //   })
    // );
  }

  routes() {
    this.app.use(this.paths.clientes, require("../routes/clientes"));
    this.app.use(this.paths.articulos, require("../routes/articulos"));
    this.app.use(this.paths.ordenes, require("../routes/ordenes"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en el puerto", this.port);
    });
  }
}

module.exports = Server;
