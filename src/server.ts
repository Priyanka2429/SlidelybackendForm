import express from 'express';

const app = express();
const PORT = 3000;

app.get('/api/data', (req, res) => {
    res.send('Data endpoint');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
