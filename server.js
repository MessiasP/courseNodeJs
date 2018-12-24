const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// Iniciando o APP
const app = express();
// Para permitir envios de objetos em formato json
app.use(express.json());
// Para permitir o uso de outros dominios na aplicação futuramente 
// (default = todos, passe por parametros os especificos)
app.use(cors());


// Iniciando o DB
mongoose.connect(
    "mongodb://localhost:27017/nodeapi", 
    { useNewUrlParser: true }
);
requireDir("./src/models");

// Rotas (acessa com qualquer tipo de requisição)
app.use("/api", require("./src/routes"));

app.listen(3001);