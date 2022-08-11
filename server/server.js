const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.static('server/public'));
app.use(express.urlencoded({ extended: true }));

const honeyRouter = require('./routes/honey.router.js');
app.use('/honeyList', honeyRouter);

app.listen(PORT, () => {
    console.log('listening on port', PORT);
});