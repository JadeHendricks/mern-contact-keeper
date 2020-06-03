const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.get('/', (req, res) => res.send('Hello World!'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
