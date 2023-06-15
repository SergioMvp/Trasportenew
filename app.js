import express from "express";
import mongoose from "mongoose";
import 'dotenv/config'


import autobus  from "./routes/autobus.js";
import conductor from "./routes/conductor.js";
import persona from "./routes/persona.js";
import ruta  from "./routes/ruta.js";
import ticket from "./routes/ticket.js";
import vendedor from "./routes/vendedor.js";


const app = express()
app.use(express.json())
app.use(   "/api/autobus"   ,  autobus)
app.use(   "/api/conductor", conductor)
app.use(   "/api/persona", persona)
app.use(   "/api/ruta"   ,  ruta)
app.use(   "/api/ticket", ticket)
app.use(   "/api/vendedor", vendedor)


app.listen(process.env.PORT,()=>{
  mongoose.connect(process.env.mongoDB)
  .then(()=> console.log("conectado"))
  console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
  
})
