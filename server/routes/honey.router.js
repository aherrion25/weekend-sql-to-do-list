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
            res.sendStatus(500);
        })
});



// PUT changes the value for false to true when completed
router.put('/:id',(req, res) => {
    const taskId = req.params.id;
    const queryText = 'UPDATE "task" SET "completed" = true WHERE "id" = $1;'
    pool.query(queryText, [taskId]).then(function(results){
        res.sendStatus(200);
    }).catch((error) => {
        console.log('ERROR in PUT /honeyList', error);
        res.sendStatus(500);
    })
})

// DELETE completed task from list
router.delete('/:id', (req, res) => {
    const taskId = req.params.id;
    const queryText = 'DELETE FROM "task" WHERE "id" = $1;';
    pool.query(queryText, [taskId])
        .then((results) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        })
})




// Allows server.js to require router
module.exports = router;