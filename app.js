const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/nodepop', {useNewUrlParser: true})

const app = express();
app.use(express.json())

app.use('/products', require('./routes/product'));
app.use('/tags', require('./routes/tag'));

app.listen(3000, () => console.log('Nodepop is listening in 3000'));

module.exports = app;