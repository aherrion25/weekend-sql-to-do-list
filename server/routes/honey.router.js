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

// POST all new task to database
router.post('/', (req, res) => {
    const taskToAdd = req.body;
    const queryText = `INSERT INTO "task" ("honey_do", "completed")
    VALUES ($1, $2);`
    pool.query(queryText, [taskToAdd.honey_do, taskToAdd.completed])
        .then((results) => {
            console.log(results);
            res.send(results)
        }).catch((error) => {
            console.log('ERROR in POST /honeyList', error);
            res.sendStatus(500)
        })
});




// Allows server.js to require router
module.exports = router;