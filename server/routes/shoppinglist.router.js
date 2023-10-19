const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// ---    /shoppinglist router
router.get('/', (req, res) => {
    let queryText = 'SELECT * FROM "shoppinglist" ORDER BY "name";'
    pool.query(queryText)
    .then((result) => {
        console.log('GET shopping list success');
        res.send(result.rows);
    })
    .catch((error) => {
        console.log('GET request error', error);
        res.sendStatus(500);
    })
})

router.post('/', (req,res) => {
    const item = req.body;
    let queryText = `INSERT INTO "shoppinglist" ("name", "quantity", "unit")
                    VALUES ($1, $2, $3);`;
    pool.query(queryText, [item.name, item.quantity, item.unit])
    .then((result) => {
        console.log('inserted item into database');
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log(`Error in sending database query: ${queryText}`, error);
        res.sendStatus(500);
    })
})


router.put('/:id', (req, res) => {
    console.log('Purchase PUT req.params', req.params.id);
    if (req.params.id == 'all'){
        let queryText = `UPDATE "shoppinglist" SET "purchased" = false;`;
        pool.query(queryText).then((result) => {
            console.log("All purchases reset to false");
            res.sendStatus(200);
        })
        .catch((error) => {
            console.error("Error in PUT '/shoppinglist/all' ", error);
            res.sendStatus(500);
        })
    }
    else{
        let queryText = `
            UPDATE "shoppinglist" SET "purchased" = true
            WHERE "id" = $1;
        `;
        pool.query(queryText, [req.params.id]).then((result) => {
            console.log(`Id: ${req.params.id} marked as purchased.`);
            res.sendStatus(200);
        })
        .catch((error) => {
            console.error(`Error in PUT '/shoppinglist/${req.params.id}' `, error);
            res.sendStatus(500);
        })
    }
    
})

router.delete('/:id', (req, res) => {
    console.log('DELETE req', req.params.id);
    if (req.params.id == 'all'){
        let queryText = `
            DELETE FROM "shoppinglist";
        `;
        pool.query(queryText).then((result) => {
            console.log('DELETE all successful');
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('DELETE error', error);
            res.sendStatus(500);
        });
    }
    else {
        let queryText = `
            DELETE FROM "shoppinglist" WHERE "id" = $1;
        `;
        pool.query(queryText, [req.params.id])
        .then((result) => {
            console.log('DELETE successful for id: ',req.params.id);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('DELETE error', error);
            res.sendStatus(500);
        });
    }
    
});


module.exports = router; 