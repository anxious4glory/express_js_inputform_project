import express from 'express'
import path, { dirname } from 'path';
import { stat } from 'fs';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';


const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express()
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.post('/submit', (req, res) => {
 console.log(req.body); // <-- This logs the form data
  res.send('Form data received! Check your console.');
});






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

