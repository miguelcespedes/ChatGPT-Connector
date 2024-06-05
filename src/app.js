// src/app.js
const express = require('express');
const ChatGPTConnector = require('./ChatGPTConnector.js'); // Assuming ChatGPTConnector.js

const app = express();
const port = 80;

app.use(express.static('public'));

const chatGPTConnector = new ChatGPTConnector(); // Create a ChatGPTConnector instance

app.get('/client', async (req, res) => {
  try {
    const prompt = req.query.prompt;

    if (!prompt) {
      return res.status(400).send('Error: Missing prompt parameter.');
    }

    await chatGPTConnector.connect(); // Use await here
    const responseHTML = await chatGPTConnector.getChatGPTResponseHTML(prompt);

    if (responseHTML) {
      return res.status(200).send(responseHTML);
    } else {
      return res.status(500).send('Error: Failed to retrieve response.');
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send('Internal Server Error');
  } finally {
    await chatGPTConnector.disconnect();
  }
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);

});
