const express = require('express');
const app = express();
const mongoose = require('mongoose');

const userRouter = require('./routes/userRoute');
const contactRouter = require('./routes/contactRoute');
const authRouter = require('./routes/authRoute');

app.use('/api/users', userRouter);
app.use('/api/contacts', contactRouter);
app.use('/api/auth', authRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
