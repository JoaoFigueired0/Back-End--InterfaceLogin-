import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import User from "./src/models/user.model.js";

const app = express();


app.use(cors({ origin: "*" }));
app.use(express.json());


mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB conectado"))
  .catch(err => console.error("Erro MongoDB:", err));

app.post("/users", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();

    return res.status(201).json({
      message: "Usuário criado com sucesso",
      user: newUser
    });

  } catch (err) {
    return res.status(500).json({
      message: "Erro ao criar usuário",
      error: err.message
    });
  }
});


// Porta
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
