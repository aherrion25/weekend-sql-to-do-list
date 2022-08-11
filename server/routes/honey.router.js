const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET all task for honey-do list
router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM "task" ORDER BY "completed";';
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('ERROR in GET /honeyList', error);
        res.sendStatus(500);
    });
});




// Allows server.js to require router
module.exports = router;