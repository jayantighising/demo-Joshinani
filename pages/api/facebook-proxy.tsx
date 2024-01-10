import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get(
      'https://www.facebook.com/plugins/customer_chat/SDK',
      {
        params: req.query,
      }
    );
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(error.response?.status || 500).send(error.message);
  }
}