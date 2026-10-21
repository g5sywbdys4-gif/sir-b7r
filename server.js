const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const apps = [
  {
    id: "whatsapp_plus",
    name: "WhatsApp B7R",
    version: "2.24.1",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
    description: "نسخة معدلة من واتساب",
    download_url: "https://your-domain.com/ipas/whatsapp.ipa"
  }
];

app.get('/api/apps', (req, res) => {
  res.json({ success: true, apps: apps });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'online', owner: 'Sir.B7R' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log('Server running');
});
