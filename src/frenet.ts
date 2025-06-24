import axios from 'axios';

const FRENET_API_URL = 'https://api.frenet.com.br/shipping/quote';

export async function calculateFreight(data: any) {
  try {
    const response = await axios.post(FRENET_API_URL, data, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'token': process.env.FRENET_API_TOKEN
      }
    });
    console.log(response)
    return response.data;
  } catch (error: any) {
    console.error('Erro na chamada da Frenet:', error.response?.data || error.message);
    throw new Error('Erro ao consultar a Frenet.');
  }
}
