const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.static('server/public'));
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log('listening on port', PORT);
});