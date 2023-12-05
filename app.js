const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
 
app.post('/api/login', (req, res) => {
  const { username, password } = req.body; 
  if (username === 'user' && password === 'password') {
    res.json({ success: true, message: 'Login berhasil' });
  } else {
    res.status(401).json({ success: false, message: 'Login gagal' });
  }
});
 
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
