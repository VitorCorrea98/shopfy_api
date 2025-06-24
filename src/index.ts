import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { calculateFreight } from './frenet';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// CORS - Só permite chamadas vindo da URL específica do seu Shopify
app.use(cors({
  origin: 'https://www.shopvalen.com.br',
  methods: ['POST'],
}));

app.use(express.json());

app.post('/calculate-freight', async (req, res) => {
  try {
    const data = req.body;
    const result = await calculateFreight(data);
    res.json(result);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
