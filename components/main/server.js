// server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); // Import CORS middleware
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors()); // Enable CORS for all origins

app.post('/send-email', async (req, res) => {
  const { name, email, _subject, message } = req.body;

  const mailjetData = {
    Messages: [
      {
        From: {
          Email: process.env.MJ_FROM_EMAIL,
          Name: process.env.MJ_FROM_NAME,
        },
        To: [
          {
            Email: 'yogesh.kumar.02@proton.me',
            Name: 'Recipient Name',
          },
        ],
        Subject: _subject || 'Contact Form Submission',
        TextPart: `
          Name: ${name}
          Email: ${email}
          Message: ${message}
        `,
      },
    ],
  };

  try {
    const fetch = await import('node-fetch').then((mod) => mod.default); // Dynamic import
    const response = await fetch('https://api.mailjet.com/v3.1/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${Buffer.from(`${process.env.MAILJET_API_KEY}:${process.env.MAILJET_API_SECRET}`).toString('base64')}`,
      },
      body: JSON.stringify(mailjetData),
    });

    const responseData = await response.json();
    console.log('Mailjet API response:', responseData);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
