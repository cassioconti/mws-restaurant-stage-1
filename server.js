const express = require('express');
const path = require('path');
var compression = require('compression');

const app = express();

// app.get('/', (req, res) => res.send('Hello World!'));
app.use(compression());
app.use(express.static(path.join(__dirname, 'dist')));

app.listen(8887, () => console.log('App listening on port 8887!'));