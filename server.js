const express = require('express');
const connectDB = require('./db');
const Log = require('./Log');

const app = express();
app.use(express.json());

connectDB();

app.use(async (req, res, next) => {
  const log = new Log({
    method: req.method,
    url: req.url,
    headers: req.headers,
    body: req.body,
  });

  await log.save();
  next();
});

app.all('/', (req, res) => {
  res.send('API Logger');
});

// Nova rota para listar todos os logs do mais recente para o mais antigo
app.get('/logs', async (req, res) => {
  try {
    const logs = await Log.find().sort({ timestamp: -1 }); // Ordena por timestamp decrescente
    res.json(logs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const PORT = process.env.PORT || 80;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));