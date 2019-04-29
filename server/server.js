require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3300;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.send('Welcome');
});

app.listen(port, () => console.log(`Commerce Test Tools listening on port ${port}`))